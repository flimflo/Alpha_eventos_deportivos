import { RouteConfig } from 'vue-router';
import {
  Auth,
  CommentReviewer,
  LeaderboardTable,
  NoticePublisher,
  RolesPublsiher,
  BestOfLeague,
  MediaPublisher,
} from '../sections';

export function getRouterConfig() {
  const authenticatedRoutes: RouteConfig[] = [
    { path: '/comments', component: CommentReviewer },
    { path: '/leaderboard', component: LeaderboardTable },
    { path: '/news', component: NoticePublisher },
    { path: '/roles', component: RolesPublsiher },
    { path: '/best-of-league', component: BestOfLeague },
    { path: '/media',component: MediaPublisher},
  ]
  const noAuthRoutes: RouteConfig[] = [
    { path: '/auth', component: Auth }
  ]

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
