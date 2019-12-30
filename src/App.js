import React, {Component} from 'react';
import './App.css';

/* API key */
import apiKey from './apikey/key'

/* Import components */
import SourceSelector from './Components/SourceSelector';
import Articles from './Components/Articles';


class App extends Component {

  state = {
    sources: [],
    newsSource: 'techcrunch',
    articles: []
  }

  componentDidMount() {
    this.handleSources();
    this.handleArticles();
  }

  handleSources = async () => {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json();

    this.setState({sources: json.sources});
  }

  handleArticles = async (source = this.state.newsSource) => {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
    const json = await res.json();

    this.setState({articles: json.articles});
  }

  render() {
    return (
      <div className="container">
        <div className="header">
            <h1>RickNews</h1>
        </div>

        <div className="main">
          <SourceSelector sources={this.state.sources} />
          <Articles articles={this.state.articles}/>
        </div>
    </div>
    )
  }
}

export default App;
