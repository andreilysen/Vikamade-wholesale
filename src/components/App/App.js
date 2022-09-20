/* eslint-disable no-unused-vars */
import React from "react";

import Container from "../Container";
import Header from "../Header";
import GroupsList from "../GroupsList/GroupsList";
import Footer from "../Footer";

const App = () => {
  return (
    <Container>
      <Header />
      <GroupsList />
      <Footer />
    </Container>
  );
};

export default App;
