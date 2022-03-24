import { useEffect } from 'react';

export function useUnmountEffect(fn: () => void) {
  return useEffect(() => () => fn(), []);
}
