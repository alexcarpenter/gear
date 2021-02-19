import Page from "@/components/Page";

export default function NewsletterSuccess() {
  return (
    <Page
      meta={{
        title: "Newsletter success",
      }}
    >
      <Page.Header>
        <Page.Title>Success</Page.Title>
        <Page.Description>Thanks for joining!</Page.Description>
      </Page.Header>
    </Page>
  );
}
