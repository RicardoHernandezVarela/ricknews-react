import React, {Component} from 'react';
import './App.css';

/* API key */
import apiKey from './apikey/key'

/* Import components */
import SourceSelector from './Components/SourceSelector'


class App extends Component {

  state = {
    sources: []
  }

  componentDidMount() {
    this.handleSources();
  }

  handleSources = async () => {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json();

    this.setState({sources: json.sources});
  }

  render() {
    return (
      <div className="container">
        <div className="header">
            <h1>RickNews</h1>
        </div>

        <div className="main">
          <SourceSelector sources={this.state.sources} />
        </div>
    </div>
    )
  }
}

export default App;
