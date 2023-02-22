import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './../../../store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const {isLogged} = useAppSelector((state)=> state.auth);
    return isLogged
}


// export const useAuth = () => useAppSelector((state)=> state.auth.isLogged);