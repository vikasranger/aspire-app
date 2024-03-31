import {createContext} from "react";
import {useContext} from "react";

const ctxPage = createContext({});

export function usePageCtx()
{
  return useContext(ctxPage);
}

export default function PageCtxProvider(props: {
  children: React.ReactNode
})
{
  return (
    <ctxPage.Provider value={ctxPage}>
      {props.children}
    </ctxPage.Provider>
  );
}
