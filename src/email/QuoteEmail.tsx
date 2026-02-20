import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message:string;
};

export default function QuoteEmail({
  name,
  email,
  phone,
  projectType,
  budget,
  timeline,
  message
}: Props) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f4f4f4", fontFamily: "Arial" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
          <Heading style={{ color: "#c49a6c" }}>
            🏗 New Construction Quote Request
          </Heading>

          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Phone:</strong> {phone}</Text>
            <Text><strong>Project:</strong> {projectType}</Text>
            <Text><strong>Budget:</strong> {budget}</Text>
            <Text><strong>Timeline:</strong> {timeline}</Text>
            <Text>{message}</Text>

          </Section>

          <Section style={{ marginTop: "20px" }}>
            <Text style={{ fontSize: "12px", color: "#999" }}>
              This email was sent from MM Builds construction website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
