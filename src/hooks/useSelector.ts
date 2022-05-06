import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Redux/state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
