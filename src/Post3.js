import React, { Component } from 'react';

export default class Post3 extends Component {
  render(){
    return(
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">
            Science has not yet mastered prophecy
          </h2>
          <h3 className="post-subtitle">
            We predict too much for the next year and yet far too little for the next ten.
          </h3>
        </a>
        <p className="post-meta">Posted on August 24, 2018</p>
      </div>
    );
  }
}
