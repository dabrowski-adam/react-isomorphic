import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.message) {
    errors.message = 'Required';
  }
  if (!values.email) {
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
  ? <textarea className={`textarea ${valClass(touched, error, warning)}`} {...input} placeholder={label} type={type} />
  : <input className={`input ${valClass(touched, error, warning)}`} {...input} placeholder={label} type={type} />
);

const ContactValidationForm = (props) => {
  const { handleSubmit, pristine, /* reset, */ submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="message" type="textarea" component={renderField} label="Message" />
      <div className="control is-grouped" style={{ marginTop: '0.5rem' }}>
        <p className="control has-icon is-expanded">
          <Field name="email" type="email" component={renderField} label="Email" />
          <i className="fa fa-envelope" />
        </p>
        <button className={`button is-primary ${submitting ? 'is-loading' : ''}`} type="submit" disabled={pristine || submitting}>Send</button>
      </div>
    </form>
  );
};

renderField.propTypes = {
  // input: PropTypes.array, // ?
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
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'contactValidation', validate, warn })(ContactValidationForm);
