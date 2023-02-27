import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './../../../store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => !!sessionStorage.getItem('token') ? true : false
     



// export const useAuth = () => useAppSelector((state)=> state.auth.isLogged);