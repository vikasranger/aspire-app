import {Navigate} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import LayoutFlexRow from "../components/raw/LayoutFlexRow.tsx";
import {usePageCtx} from "../ctx/CtxPage.tsx";
import Cards from "./cards/Cards.tsx";
import Credit from "./credit/Credit.tsx";
import Home from "./home/Home.tsx";
import Payments from "./payments/Payments.tsx";
import {ROUTE_SETTING} from "./Routes.ts";
import {ROUTE_CREDIT} from "./Routes.ts";
import {ROUTE_PAYMENTS} from "./Routes.ts";
import {ROUTE_CARDS} from "./Routes.ts";
import {ROUTE_HOME} from "./Routes.ts";
import {ROUTE_SIGN_IN} from "./Routes.ts";
import Settings from "./settings/Settings.tsx";
import SignIn from "./signIn/SignIn.tsx";

export default function RouteSwitch()
{
  const pageCtx = usePageCtx();
  const smallDesktop = pageCtx.isSmallDesktop();

  if(smallDesktop)
  {
    return (
      <LayoutFlexRow width={"100%"} height={"100%"}>
        <h2> 🧙‍♀️Not implemented for small screen</h2>
      </LayoutFlexRow>
    );
  }

  return (
    <Routes>
      <Route
        path={ROUTE_SIGN_IN}
        element={<SignIn />}
      />
      <Route
        path={ROUTE_HOME}
        element={<Home />}
      />
      <Route
        path="*"
        element={<Navigate
          to={ROUTE_HOME}
          replace
        />}
      />
      <Route
        path={ROUTE_CARDS}
        element={<Cards />}
      />
      <Route
        path={ROUTE_PAYMENTS}
        element={<Payments />}
      />
      <Route
        path={ROUTE_CREDIT}
        element={<Credit />}
      />
      <Route
        path={ROUTE_SETTING}
        element={<Settings />}
      />
    </Routes>
  );
}
