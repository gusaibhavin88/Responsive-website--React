import React from "react";
import {
  Footer,
  Header,
  LearnPage,
  Posts,
  StudentVideo,
  Profile,
} from "./Components/Index";

const App = () => {
  return (
    <>
      <Header />
      <LearnPage />
      <StudentVideo />
      <Posts />
      <Profile />
      <Footer />
    </>
  );
};

export default App;
