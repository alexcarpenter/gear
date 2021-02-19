import Page from "@/components/Page";
import SubscribeForm from "@/components/SubscribeForm";

export default function Newsletter() {
  return (
    <Page
      meta={{
        title: "Newsletter",
      }}
    >
      <Page.Header>
        <Page.Title>Newsletter</Page.Title>
        <Page.Description>
          Dictumst cubilia mauris vestibulum tortor ultrices tempus potenti
          tristique cum fermentum senectus semper consequat euismod leo
          ultricies sociosqu per rhoncus
        </Page.Description>
      </Page.Header>
      <SubscribeForm />
    </Page>
  );
}
