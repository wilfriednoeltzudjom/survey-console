import React from 'react';
import { useDispatch } from 'react-redux';

import { FORM_MODES, ROLES } from '../../../../_helpers/enums';
import { LABEL_CONFIRM_PASSWORD, LABEL_EMAIL, LABEL_FIRST_NAME, LABEL_LAST_NAME, LABEL_PASSWORD, LABEL_SAVE, LABEL_SELECT_ROLE } from '../../../../_helpers/labels';
import { formPropTypes } from '../../../../_helpers/propTypes.schemas';
import { formatSelectOptions, toSelectOption } from '../../../../_helpers/library.helper';

import { Form } from '../../../helpers';
import { Button, Field } from '../../../library';

export default function AccountForm({ mode, formState, formErrors, onChange, onSubmit }) {
  const { requesting } = useDispatch((state) => state.ui.formState);

  function handleSubmit() {
    if (requesting) return;
    onSubmit();
  }

  return (
    <Form>
      <Form.Body>
        <Form.Group>
          <Field fluid type="text" name="lastName" label={LABEL_LAST_NAME()} defaultValue={formState.lastName} error={formErrors.lastName} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Field fluid type="text" name="firstName" label={LABEL_FIRST_NAME()} defaultValue={formState.firstName} error={formErrors.firstName} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Field
            fluid
            type="select"
            name="role"
            label={LABEL_SELECT_ROLE()}
            options={formatSelectOptions(ROLES)}
            defaultOption={toSelectOption(formState.role)}
            error={formErrors.role}
            disabled={mode === FORM_MODES.EDITION}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Field fluid type="email" name="email" label={LABEL_EMAIL()} defaultValue={formState.email} error={formErrors.email} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Field fluid type="password" name="password" label={LABEL_PASSWORD()} defaultValue={formState.password} error={formErrors.password} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Field
            fluid
            type="password"
            name="confirmPassword"
            label={LABEL_CONFIRM_PASSWORD()}
            defaultValue={formState.confirmPassword}
            error={formErrors.confirmPassword}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Body>

      <Form.Footer>
        <Form.Group>
          <Button disabled={requesting} colorScheme="secondary" onClick={handleSubmit}>
            {LABEL_SAVE()}
          </Button>
        </Form.Group>
      </Form.Footer>
    </Form>
  );
}
AccountForm.propTypes = formPropTypes;
