import React, { Component } from 'react';
import Home from './Components/Home';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Cookies from './Components/Cookies';
import GitHub from './Components/Github';
import Loading from './Components/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGitHub: true,
      loading: true, // Add a loading state
    };
  }

  componentDidMount() {
    document.title = 'Gjin Prelvukaj - Portfolio';

    // Simulate a delay of 2 seconds
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  handleCloseGitHub = () => {
    this.setState({ showGitHub: false });
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      // Render the loading screen
      return (
        <div className="loading-screen">
          <Loading />
        </div>
      );
    }

    return (
      <div>
        {this.state.showGitHub && <GitHub onClose={this.handleCloseGitHub} />}
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


