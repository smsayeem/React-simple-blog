import React, { Component } from 'react';

export default class Post2 extends Component {
  render(){
    return(
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">
            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
          </h2>
        </a>
        <p className="post-meta">Posted on September 18, 2018</p>
      </div>
    );
  }
}
