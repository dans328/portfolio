import { Container } from "react-bootstrap";
import content from "../content/content";
import Links from "./Links";

function Home() {

  return (
    <Container className="mt-1 p-0">
      <h2>{content.homeHeading}</h2>
      <p>{content.homeBody}</p>
      <div className="linkContSmall">
        {<Links />}
      </div>
    </Container>
  );
}

export default Home;