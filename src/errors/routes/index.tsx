import { Routes, Route } from "react-router-dom";

import UnauthorizedView from "../views/UnauthorizedPage";
import ForbiddenView from "../views/ForbiddenView";
import ServerErrorView from "../views/ServerErrorView";
import NotFoundView from "../views/NotFoundView";

export const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="/401" element={<UnauthorizedView />} />
      <Route path="/403" element={<ForbiddenView />} />
      <Route path="/500" element={<ServerErrorView />} />
      <Route path="/404" element={<NotFoundView />} />
    </Routes>
  );
};
