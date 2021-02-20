import Page from "@/components/Page";
import ResourceSections from "@/components/Resources";

export default function Resources() {
  return (
    <Page
      meta={{
        title: "Resources",
      }}
    >
      <Page.Header>
        <Page.Title>Resources</Page.Title>
        <Page.Description>
          Tortor massa auctor elit mauris porta sem laoreet tristique vivamus
          taciti metus cursus vitae lacus nisl vel accumsan lectus praesent
        </Page.Description>
      </Page.Header>
      <ResourceSections />
    </Page>
  );
}
