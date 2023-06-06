import { useCallback, useState } from 'react';

export default function () {
  const [fetched, setFetched] = useState(false);

  const handleFetched = useCallback(() => {
    setFetched(true);
  }, []);

  return { fetched, handleFetched };
}
