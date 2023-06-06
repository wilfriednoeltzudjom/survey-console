import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AlertContext = createContext({
  alertShown: false,
  alertArgs: {},
  setAlertShown: () => {},
  setAlertArgs: () => {},
});

export default function Alert({ children }) {
  const [alertShown, setAlertShown] = useState(false);
  const [alertArgs, setAlertArgs] = useState({});
  const value = useMemo(() => ({ alertShown, alertArgs, setAlertShown, setAlertArgs }), [alertShown, alertArgs]);

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
}
Alert.propTypes = {
  children: PropTypes.node,
};
