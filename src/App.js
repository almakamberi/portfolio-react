import React, { Component } from 'react';
import Home from './Components/Home';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Cookies from './Components/Cookies';
import Work from './Components/Work';

class App extends Component {
  componentDidMount() {
    document.title = 'Gjin Prelvukaj - Portfolio';
  }

  render() {
    return (
      <div>
        <Cookies />
        <Home />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;