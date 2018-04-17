import React, { Component } from 'react';
import Post1 from './Post1'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'

export default class Container extends Component {
  render(){
    return(

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Post1 />              <hr />
              <Post2 />              <hr />
              <Post3 />              <hr />
              <Post4 />              <hr />
            </div>
          </div>
        </div>

    );
  }
}
