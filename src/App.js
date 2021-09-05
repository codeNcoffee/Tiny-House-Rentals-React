import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Home />
        <ContactModal />
        <Footer />
      </div>
    );
  }
}

export default App;
