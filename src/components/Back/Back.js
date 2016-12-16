import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Link from '../Link';
import ContactValidationForm from '../ContactValidationForm';

import { submitMessage } from '../../actions/contact';

const mapStateToProps = state => ({ isSent: state.contact.isSent });

@connect(mapStateToProps)
class Back extends Component {
  render() {
    const { isSent } = this.props;
    return (
      <div className="tile is-vertical" style={{ height: '100%', justifyContent: 'space-between' }}>
        <div className="nav" style={{ marginBottom: '10px' }}>
          <div className="nav-left" />
          <div className="nav-center"><h2 className="title nav-item">{ isSent ? 'Thank You!' : 'Contact'}</h2></div>
          <div className="nav-right"><Link to="/" className="nav-item"><span className="icon"><i className="fa fa-undo" /></span></Link></div>
        </div>
        <ContactValidationForm onSubmit={submitMessage} />
      </div>
    );
  }
}

Back.propTypes = {
  isSent: PropTypes.bool.isRequired,
};

export default Back;
