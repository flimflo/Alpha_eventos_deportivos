import { RouteConfig } from 'vue-router';
import {
  Auth,
  CommentReviewer
} from '../sections/';

export function getRouterConfig() {
  const authenticatedRoutes: RouteConfig[] = [
    { path: '/comments', component: CommentReviewer },
  ];
  const noAuthRoutes: RouteConfig[] = [
    { path: '/auth', component: Auth }
  ];
  const allRoutes = [...authenticatedRoutes, ...noAuthRoutes];
  const authenticatedRouteKeys = new Set(authenticatedRoutes.map(x => x.path));
  const noAuthRouteKeys = new Set(authenticatedRoutes.map(x => x.path));

  function pathIsAuthGuarded(path: string) {
    return authenticatedRouteKeys.has(path);
  }

  return {
    allRoutes,
    authenticatedRouteKeys,
    noAuthRouteKeys,
    pathIsAuthGuarded
  };
}
