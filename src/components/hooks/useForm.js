import { useState, useCallback } from 'react';
import { cloneObject } from '../../_helpers/types.helper';

export default function ({ onSubmit } = {}) {
  const [formState, setFormState] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formDisabledFields, setFormDisabledFields] = useState([]);
  const [mode, setMode] = useState('');

  const handleChange = useCallback(({ name, value }) => {
    setFormState((currentFormState) => ({
      ...currentFormState,
      [name]: value,
    }));
    setFormErrors((currentFormErrors) => {
      if (currentFormErrors[name]) {
        const clone = cloneObject(currentFormErrors);
        delete clone[name];

        return clone;
      }

      return currentFormErrors;
    });
  });

  const handleSubmit = useCallback((evt) => {
    if (evt) evt.preventDefault();
    onSubmit(evt);
  }, []);

  const updateFormState = useCallback((formStateUpdates = {}) => {
    const clonedStateUpdates = { ...formStateUpdates };
    const fieldsToDelete = ['id', 'created', 'updated', 'deleted', 'deletedAt'];
    fieldsToDelete.forEach((field) => delete clonedStateUpdates[field]);
    setFormState((currentFormState) => ({ ...currentFormState, ...clonedStateUpdates }));
  }, []);

  const resetFormState = useCallback((formStateUpdates = {}) => {
    setFormState(formStateUpdates);
    setFormErrors({});
  }, []);

  return {
    formState,
    formErrors,
    formDisabledFields,
    mode,
    setFormErrors,
    setFormDisabledFields,
    handleChange,
    handleSubmit,
    updateFormState,
    resetFormState,
    setMode,
  };
}
