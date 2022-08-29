import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import queryHandler from './queryHandler.js';
import Results from './Results.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      treeData: [{
        key: "Results",
        label: "Results will load here",
        nodes: [{ key: "Node A", label: "Node A" }, { key: "Node B", label: "Node B" }]
      }],

    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    let queryString = event.nativeEvent.target[1].value;
    console.log('app.js: ', queryString)
    this.setState({ url: queryString });

    queryHandler(queryString).then((resp) => {
      let result = resp;
      this.setState({ treeData: result })
    }).then(() => console.log('handlesubmit: ', this.state))
  }

  render() {
    return (
      <div className="App">
        <div className="container pt-5">
          <section id="liveNoticePlaceholder" className="pt-2 text-center"></section>
          <div className="w-responsive text-center mx-auto p-3 mt-5">
            <div className="jumbotron">
              <h1 className="display-6">React Link-Grabber</h1>
              <h5>Scrape public webpages for hyperlinks</h5>
              <p className="fw-light fs-6">
                Enter the URL and click <i>Search</i> to get started.
              </p>
              <div className="container pb-1">
                <Form handleSubmit={this.handleSubmit} />
              </div>
              <div className="jumbotron">
                <div className="container-lg">
                  <div id="row justify-content-start" className="d-flex text-left">
                    <div id="results" className="col-2"></div>
                    <div id="container" className="col-11">
                      <div id="results_container" className="col-lg-6 text-left bg-white">
                        <Results url={this.state.url} data={this.state.treeData}></Results>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="break"></div>
      </div>
    );
  };
}

