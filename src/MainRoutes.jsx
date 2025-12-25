import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Layout } from "./components/layout/Layout";
import { PAGES } from "./config/pages.config";

export function MainRoutes() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          {PAGES.map(route => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}