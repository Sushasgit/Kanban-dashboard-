import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    marginTop: '40px',
    width: '19%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
    height: '36px',
    borderRadius: '9px',
    border: 'none',
  },

  btn: {
    backgroundColor: '#22223B',
    color: '#fff',
    padding: '15px 60px',
    fontSize: '100%',
    marginTop: '20px',
  },
});

const renderField =
  ({
    input,
    label,
    type, meta:
    { touched, error },
  }) => {
    const hasError = (touched && error) ? 'has-danger' : '';
    return (
      <div className={`${hasError}`}>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} className={css(styles.input)} />
          {touched && error && <div>{error}</div>}
        </div>
      </div>
    );
  };

const renderErrors = errors => (
  <div className="alert alert-danger" role="alert">
    { errors ? <span>{ errors }</span> : null }
  </div>

);

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  const errors = props.errors ? renderErrors(props.errors) : null;
  return (
    <form className={css(styles.form)} onSubmit={handleSubmit}>
      {errors}
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <button type="submit" className={css(styles.btn)}>Sign up</button>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 3) {
    errors.password = 'Must be at least 4 characters';
  }

  return errors;
};


export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
