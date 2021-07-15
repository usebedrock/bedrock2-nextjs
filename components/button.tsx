import React, { Component, useState } from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        type="button"
        className={` ${ this.props.skin == 'primary' ? 't-button-primary' : '' }
                      t-button
                     `}
      >
        {this.props.children}
      </button>
    );
  }
}
