import * as React from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";
import { cx, isEmail } from "@/lib/utils";
import Emoji from "./Emoji";

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
        <div className='relative flex flex-col sm:flex-row font-mono'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='p-4 flex-1 border-2 border-gray-200 focus:border-green-500 focus:ring ring-green-300 bg-gray-50 outline-none'
            placeholder='Your email address'
          />
          <button
            type='submit'
            disabled={isDisabled}
            className={cx(
              isDisabled && "pointer-events-none",
              "relative mt-4 sm:mt-0 ml-0 sm:ml-4 p-4 bg-green-500 hover:bg-green-700 focus:outline-none focus:ring ring-green-300 text-white",
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
          <Emoji label="bull horns" symbol="🤘" /> Success, thanks for subscribing!
        </p>
      )}

      {current.matches("error") && (
        <p className='font-mono text-gray-500 text-sm'>
          <Emoji label="man facepalming" symbol="🤦‍♂️" /> Invalid email. Please try again.
        </p>
      )}

      {current.matches("failure") && (
        <p className='font-mono text-gray-500 text-sm'>
          <Emoji label="thinking" symbol="🤔" /> Something went wrong while submitting the form. Please try again.
        </p>
      )}
    </>
  );
}
