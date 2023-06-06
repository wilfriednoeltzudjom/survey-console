import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../../../store/auth/auth.slice';
import { isNonEmptyObject } from '../../../_helpers/dataValidator.helper';
import formValidatorHelper from '../../../_helpers/formValidator.helper';
import { signInFormFieldsDescriptor } from '../../../_helpers/form_fields_descriptors';
import { LABEL_SIGN_IN, LABEL_EMAIL, LABEL_NOT_YET_REGISTERED, LABEL_PASSWORD, LABEL_SIGN_IN_SUB_TITLE, LABEL_CONTACT_ADMINISTRATOR } from '../../../_helpers/labels';

import { Container, Form, Viewport } from '../../helpers';
import { Button, Card, Field, Text } from '../../library';
import useForm from '../../hooks/useForm';

export default function SignIn() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.core.authState);
  const { requesting, errors = {} } = useSelector((state) => state.ui.formState);
  const signInForm = useForm();

  function handleSubmit() {
    if (requesting) return;

    const { formState } = signInForm;
    const { validForm, formErrors } = formValidatorHelper.validateForm(formState, signInFormFieldsDescriptor());
    signInForm.setFormErrors(formErrors);
    if (validForm) dispatch(signIn(formState));
  }

  if (isNonEmptyObject(profile)) return <Redirect to="/" />;

  const { formErrors, handleChange } = signInForm;

  return (
    <Viewport variant="public">
      <Container variant="public">
        <Card>
          <Form variant="public" onSubmit={handleSubmit}>
            <Form.Header>
              <Form.Title>{LABEL_SIGN_IN()}</Form.Title>
              <Form.SubTitle>{LABEL_SIGN_IN_SUB_TITLE()}</Form.SubTitle>
            </Form.Header>

            <Form.Body variant="public">
              <Form.Group>
                <Field fluid type="email" name="email" label={LABEL_EMAIL()} required error={formErrors.email || errors.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Field fluid type="password" name="password" label={LABEL_PASSWORD()} required error={formErrors.password || errors.password} onChange={handleChange} />
              </Form.Group>
            </Form.Body>

            <Form.Footer>
              <Form.Group fluid>
                <Button fluid onClick={handleSubmit}>
                  {LABEL_SIGN_IN()}
                </Button>
              </Form.Group>
              <Form.Group variant="inline" justify="center">
                <Text.Label size="sm">{LABEL_NOT_YET_REGISTERED()}</Text.Label>
                <Text size="sm">{LABEL_CONTACT_ADMINISTRATOR()}</Text>
              </Form.Group>
            </Form.Footer>
          </Form>
        </Card>
      </Container>
    </Viewport>
  );
}
