import React, { Component } from 'react';

import '../styles/Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className='center'>
          <div className="lds-grid center">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      
    );
  }
}
