import { useCallback, useState } from 'react';

export default function ({ initialTitle = '' } = {}) {
  const [shown, setShown] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleShow = useCallback(() => {
    setShown(true);
  }, []);

  const handleHide = useCallback(() => {
    setShown(false);
  }, []);

  return {
    shown,
    title,
    setTitle,
    handleShow,
    handleHide,
  };
}
