import React from 'react';
import PropTypes from 'prop-types';

import { ErrorFallback } from './ErrorFallback';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    if (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.hasError ? <ErrorFallback /> : this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
