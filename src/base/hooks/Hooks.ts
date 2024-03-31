import {TypedUseSelectorHook} from "react-redux";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {RootState} from "../../store/store.ts";
import {AppDispatch} from "../../store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
