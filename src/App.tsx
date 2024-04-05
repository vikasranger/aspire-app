import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";
import ErrorFallback from "./components/composite/ErrorFallback.tsx";
import FadeLoader from "./components/composite/FadeLoader.tsx";
import PageContextProvider from "./context/pageContext.tsx";
import RouteSwitch from "./routes/RouteSwitch.tsx";

function App()
{
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<FadeLoader />}>
          <PageContextProvider>
            <RouteSwitch />
          </PageContextProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
