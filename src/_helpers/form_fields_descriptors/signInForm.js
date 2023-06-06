import { LANGUAGES } from '../enums';
import { LABEL_EMAIL, LABEL_PASSWORD } from '../labels';

export default function ({ language = LANGUAGES.FR } = {}) {
  return [
    {
      property: 'email',
      type: 'string',
      label: LABEL_EMAIL({ language }),
      required: true,
    },
    {
      property: 'password',
      type: 'string',
      label: LABEL_PASSWORD({ language }),
      required: true,
    },
  ];
}
