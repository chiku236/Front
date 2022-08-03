import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Loader } from "./components";
import PublicOutlet from "./components/routes/PublicOutlet";
import PrivateOutlet from "./components/routes/PrivateOutlet";
import { publicRoutes, privateRoutes } from "./components/routes";

function App() {
  // const { loading } = useLoadingWithRefresh();
  const loading = false;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicOutlet />}>
            {publicRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
          </Route>

          <Route path="/" element={<PrivateOutlet />}>
            {privateRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={
                  route.withNav ? (
                    <Layout>{route.component}</Layout>
                  ) : (
                    route.component
                  )
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
