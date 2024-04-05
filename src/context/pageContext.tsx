import React from "react";
import {createContext} from "react";
import {useContext} from "react";
import {useWinSize} from "../base/hooks/Hooks.ts";
import {IPageContext} from "../base/types/Types.ts";

const pageContext = createContext({} as IPageContext);

export function usePageContext()
{
  return useContext(pageContext);
}

export default function PageContextProvider(props: {
  children: React.ReactNode
})
{

  const pageContextValue = {} as IPageContext;
  const winSize = useWinSize();
  const appMinTabletWidth = 680;
  const appMinDesktopWidth = 800;
  const appMinDesktopHeight = 700;

  pageContextValue.isMobile = () => winSize.width < appMinTabletWidth;
  pageContextValue.isDesktop = () => winSize.width >= appMinDesktopWidth;
  pageContextValue.isSmallDesktop = () => winSize.width < appMinDesktopWidth || winSize.height < appMinDesktopHeight;

  return (
    <pageContext.Provider value={pageContextValue}>
      {props.children}
    </pageContext.Provider>
  );
}
