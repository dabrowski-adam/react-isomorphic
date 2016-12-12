import React, { Component } from 'react';

import Link from '../Link';
import ContactValidationForm from '../ContactValidationForm';

import { submitMessage } from '../../actions/contact';

class Back extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical" style={{ height: '16rem', justifyContent: 'space-around' }}>
        <div className="nav">
        <div className="nav-left"></div>
        <div className="nav-center"><h2 className="title nav-item">Contact</h2></div>
        <div className="nav-right"><Link to="/" className="nav-item"><span className="icon"><i className="fa fa-undo" /></span></Link></div>
        </div>  
        <ContactValidationForm onSubmit={submitMessage} />
      </div>
    );
  }
}

export default Back;
