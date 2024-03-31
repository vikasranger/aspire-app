import {useState} from "react";
import {useEffect} from "react";
import {TypedUseSelectorHook} from "react-redux";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {RootState} from "../../store/store.ts";
import {AppDispatch} from "../../store/store.ts";
import {ISize} from "../types/Types.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useWinSize(): ISize
{
  const [size, setSize] = useState<ISize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() =>
  {
    const handleResize = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener("resize", handleResize);

    return () =>
    {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
