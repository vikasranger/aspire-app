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
  const appMinTabletWidth = 680;
  const appMinDesktopWidth = 1100;
  const appMinDesktopHeight = 800;

  pageCtx.isMobile = () => winSize.width < appMinTabletWidth;
  pageCtx.isDesktop = () => winSize.width >= appMinDesktopWidth;
  pageCtx.isSmallDesktop = () => winSize.width < appMinDesktopWidth || winSize.height < appMinDesktopHeight;

  return (
    <ctxPage.Provider value={pageCtx}>
      {props.children}
    </ctxPage.Provider>
  );
}
