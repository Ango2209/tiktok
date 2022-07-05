import config from "../config";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload/Upload";
import HeaderOnly from "../layouts/HeaderOnly";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Live from "../pages/Live";

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.live, component: Live },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
