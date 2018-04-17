import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(

        <header className="masthead" >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Simple Blog</h1>
                  <span className="subheading">A Blog Theme by Sam Sadot</span>
                </div>
              </div>
            </div>
          </div>
        </header>

    );
  }
}
