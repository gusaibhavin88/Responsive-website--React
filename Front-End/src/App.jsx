import React from "react";
import {
  Footer,
  Header,
  LearnPage,
  Feeds,
  StudentVideo,
  Profile,
} from "./Components/Index";

const App = () => {
  return (
    <>
      <Header />
      <LearnPage />
      <StudentVideo />
      <Feeds />
      <Profile />
      <Footer />
    </>
  );
};

export default App;
