import {createContext} from "react";
import {useContext} from "react";
import {useWinSize} from "../base/hooks/Hooks.ts";
import {IPageCtx} from "../base/types/Types.ts";

const ctxPage = createContext({} as IPageCtx);

export function usePageCtx()
{
  return useContext(ctxPage);
}

export default function PageCtxProvider(props: {
  children: React.ReactNode
})
{

  const pageCtx = {} as IPageCtx;
  const winSize = useWinSize();
  const appMinMobileWidth = 280;
  const appMinTabletWidth = 680;
  const appMinDesktopWidth = 1320;

  pageCtx.isMobile = () => winSize.width >= appMinMobileWidth && winSize.width < appMinTabletWidth;
  pageCtx.isDesktop = () => winSize.width >= appMinDesktopWidth;

  return (
    <ctxPage.Provider value={pageCtx}>
      {props.children}
    </ctxPage.Provider>
  );
}
