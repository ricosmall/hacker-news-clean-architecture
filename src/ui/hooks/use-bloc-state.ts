import { useEffect, useState } from 'react';
import { Bloc } from '../../presentation/bloc';

export const useBlocState = <T>(bloc: Bloc<T>) => {
  const [state, setState] = useState<T>(bloc.get());

  useEffect(() => {
    const updateState = (state: T) => setState(state);
    bloc.subscribe(updateState);

    return () => bloc.unsubscribe(updateState);
  }, [bloc]);

  return state;
};
