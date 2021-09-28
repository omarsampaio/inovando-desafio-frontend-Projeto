import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';

import { validate } from 'utils/validate';
import { schema } from './schema';

const focusOnErrors = createDecorator();

function PostForm({ onSubmit, footer = () => {}, initialValues = {} }) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      initialValues={initialValues}
      render={props => (
        <form onSubmit={props.handleSubmit} noValidate>
          <Field
            name="title"
            autoFocus
            type="text"
            component={TextField}
            label="Título"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Field
            name="body"
            type="text"
            component={TextField}
            label="Descrição"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          {footer(props)}
        </form>
      )}
    />
  );
}

export default PostForm;
