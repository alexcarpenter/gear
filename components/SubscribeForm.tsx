import { cx } from "@/lib/utils";
import * as React from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

// Copied from https://github.com/vigour-io/nice-is-email/blob/master/lib/index.js
const EMAIL_PATTERN = /^([^.](?![a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+\.\.)([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+[^.])|([a-zA-Z0-9]{1,2}))@([A-Za-z0-9-]{1,64}\.){1,10}[a-zA-Z]{2,64}$/;

const isEmail = (value) => {
  return (
    typeof value === "string" &&
    EMAIL_PATTERN.test(value) &&
    value.indexOf("@") < 65 &&
    value.length < 255
  );
};

const postNewSubscriber = async (email) =>
  await fetch("/api/subscribe", {
    body: JSON.stringify({
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error");
    }
  });

const submitEvent = {
  SUBMIT: [
    {
      target: "loading",
      cond: "isValidData",
    },
    { target: "error" },
  ],
};

const subscribeMachine = Machine(
  {
    id: "subscribe",
    initial: "idle",
    context: {
      message: "error message",
    },
    states: {
      idle: {
        on: {
          ...submitEvent,
        },
      },
      loading: {
        invoke: {
          id: "submitData",
          src: "submitData",
          onDone: "success",
          onError: "failure",
        },
      },
      error: {
        on: {
          ...submitEvent,
        },
      },
      success: {},
      failure: {
        on: {
          SUBMIT: "loading",
        },
      },
    },
  },
  {
    guards: {
      isValidData: (_, event) => {
        const { email } = event;
        if (email === "") return false;
        return isEmail(email);
      },
    },
    services: {
      submitData: (_, event) => {
        const { email } = event;
        return postNewSubscriber(email);
      },
    },
  },
);

export default function SubscribeForm() {
  const [email, setEmail] = React.useState("");
  const [current, send] = useMachine(subscribeMachine);
  const handleSubmit = (e) => {
    e.preventDefault();
    send({ type: "SUBMIT", email });
  };
  const isDisabled = current.matches("loading") || current.matches("success");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='relative flex'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='p-4 mr-2 flex-1 border-2 border-gray-200 focus:border-black focus:ring ring-gray-300 bg-gray-50 outline-none'
            placeholder='Your email address'
          />
          <button
            type='submit'
            disabled={isDisabled}
            className={cx(
              isDisabled && "pointer-events-none",
              "relative p-4 bg-black hover:bg-gray-700 focus:outline-none focus:ring ring-gray-300 text-white",
            )}
          >
            {current.matches("loading") && (
              <span className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </span>
            )}
            <span className={cx(current.matches("loading") && "opacity-0")}>
              Subscribe
            </span>
          </button>
        </div>
      </form>

      {current.matches("success") && (
        <p className='font-mono text-gray-500 text-sm'>
          Success, thanks for subscribing!
        </p>
      )}

      {current.matches("error") && (
        <p className='font-mono text-gray-500 text-sm'>
          Invalid email. Please try again.
        </p>
      )}

      {current.matches("failure") && (
        <p className='font-mono text-gray-500 text-sm'>
          Something went wrong while submitting the form. Please try again.
        </p>
      )}
    </>
  );
}
