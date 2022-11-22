import React from "react";
import Center from "./../../components/Center/Center";
import Card from './../../components/Card/Card';
import Header from "../../components/Header/Header";
import "./App.css";


const App = () => {
  return (
    <>
      <Header />
        <div className="container">
            <Center>
              <Card/>
            </Center>
        </div>
    </>
  );
};

export default App;
