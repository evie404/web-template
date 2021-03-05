import React from "react";
import Container from "../components/container";
import SEO from "../components/seo";

const Home: React.FC = () => (
  <Container menuKey="home">
    <SEO title="Home" />
    <div>Home</div>
  </Container>
);

export default Home;
