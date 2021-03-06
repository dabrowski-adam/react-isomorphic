import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  if (!values.message || values.message.length === 0) {
    errors.message = 'Required';
  }
  if (!values.email || values.email.length === 0) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.message && values.message.length < 10) {
    warnings.message = 'Your message is rather short...';
  }
  return warnings;
};

const valClass = (touched, error, warning) => {
  let val = '';
  if (touched) {
    if (error) {
      val = 'is-danger';
    } else if (warning) {
      val = 'is-warning';
    } else {
      val = 'is-success';
    }
  }
  return val;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  (type === 'textarea')
  ? <textarea className={`textarea ${valClass(touched, error, warning)}`} {...input} placeholder={label} type={type} min="1" required />
  : <input className={`input ${valClass(touched, error, warning)}`} {...input} placeholder={label} type={type} min="1" required />
);

const mapStateToProps = state => ({ isFailed: state.contact.isFailed });

@connect(mapStateToProps)
class ContactValidationForm extends Component {
  render() {
    const { handleSubmit, /* pristine, reset, */ submitting, isFailed } = this.props;
    return (
      <form onSubmit={handleSubmit} action="https://formspree.io/form@adamdabrowski.com" method="POST">
        <Field name="message" type="textarea" component={renderField} label="Message" />
        <div className="control is-grouped" style={{ marginTop: '0.5rem' }}>
          <p className="control has-icon is-expanded">
            <Field name="email" type="email" component={renderField} label="Email" />
            <i className="fa fa-envelope" />
          </p>
          <input type="hidden" name="_next" value="//adamdabrowski.com/contact" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <button className={`button ${isFailed ? 'is-danger' : 'is-primary'} ${submitting ? 'is-loading' : ''}`} type="submit" disabled={submitting}>{ isFailed ? 'Try Again' : 'Send'}</button>
        </div>
      </form>
    );
  }
}

renderField.propTypes = {
  input: PropTypes.any, // ?
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
};

ContactValidationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  isFailed: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'contactValidation', validate, warn })(ContactValidationForm);
