import logo from './logo.svg';
import './App.css';
import { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import queryHandler from './queryHandler.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const onSubmit = (data, e) => console.log(data, e);
  // const onError = (errors, e) => console.log(errors, e);


  handleSubmit(event) {
    event.preventDefault();
    let queryString = event.nativeEvent.target[1].value;
    console.log('app.js: ', queryString)
    queryHandler(queryString)

  }


  render() {
    return (
      <div className="App">
        <div className="container pt-5">
          <section id="liveNoticePlaceholder" className="pt-2 text-center"></section>
          <div className="w-responsive text-center mx-auto p-3 mt-5">
            <div className="jumbotron">
              <h1 className="display-6">Link-Grabber</h1>
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
                    <div id="results" className="col-3"></div>

                    <div id="container" className="col-3">
                      <div id="results_container" className="col-lg-6 text-left bg-white">
                        <div id="jstree_demo_div" className="col-sm py-3">
                          <ul><small className="text-nowrap" ><i>Results Will Load Here</i></small>
                          </ul>
                        </div>
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

