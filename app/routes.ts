import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import path from "path";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("users", "routes/admin/all-users.tsx"),
  ]),
] satisfies RouteConfig;
