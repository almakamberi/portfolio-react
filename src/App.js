import React, { Component } from 'react';
import Home from './Components/Home';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Cookies from './Components/Cookies';
import Work from './Components/Work';

function GitHub(props){
  return(
    <div class="flex items-center justify-center gap-4 bg-indigo-600 px-4 py-3 text-white">
      <p class="text-sm font-medium">
        <a href="https://github.com/GjinPrelvukaj/portfolio-react" target="_blank" class="inline-block underline"> This project is Open-Source</a>
      </p>

      <button
        aria-label="Close"
        class="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
        onClick={props.onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGitHub: true,
    };
  }

  componentDidMount() {
    document.title = 'Gjin Prelvukaj - Portfolio';
  }

  handleCloseGitHub = () => {
    this.setState({ showGitHub: false });
  };

  render() {
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
