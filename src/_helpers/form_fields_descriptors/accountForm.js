import { isNonEmptyString } from '../dataValidator.helper';
import { LANGUAGES } from '../enums';
import { LABEL_CONFIRM_PASSWORD, LABEL_EMAIL, LABEL_FIRST_NAME, LABEL_LAST_NAME, LABEL_PASSWORD, LABEL_PASSWORDS_ARE_DIFFERENT, LABEL_ROLE } from '../labels';

export default function ({ language = LANGUAGES.FR } = {}) {
  return [
    {
      property: 'lastName',
      type: 'string',
      label: LABEL_LAST_NAME({ language }),
      required: true,
    },
    {
      property: 'firstName',
      type: 'string',
      label: LABEL_FIRST_NAME({ language }),
      required: true,
    },
    {
      property: 'role',
      type: 'string',
      label: LABEL_ROLE({ language }),
      required: true,
    },
    {
      property: 'email',
      type: 'string',
      dataType: 'email',
      label: LABEL_EMAIL({ language }),
      required: true,
    },
    {
      property: 'password',
      type: 'string',
      label: LABEL_PASSWORD({ language }),
      required: true,
    },
    {
      property: 'confirmPassword',
      type: 'string',
      label: LABEL_CONFIRM_PASSWORD({ language }),
      required: true,
      validate({ password, confirmPassword }, formErrors = {}) {
        const samePasswords = isNonEmptyString(password) && isNonEmptyString(confirmPassword) && password === confirmPassword;
        if (!samePasswords) formErrors.confirmPassword = LABEL_PASSWORDS_ARE_DIFFERENT({ language });

        return samePasswords;
      },
    },
  ];
}
