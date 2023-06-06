import loadable from '@loadable/component';

const SignIn = loadable(() => import('./components/pages/sign_in/SignIn'));
const Home = loadable(() => import('./components/pages/home/Home'));
const Surveys = loadable(() => import('./components/pages/surveys/Surveys'));
const Survey = loadable(() => import('./components/pages/surveys/Survey'));
const Accounts = loadable(() => import('./components/pages/accounts/Accounts'));

export const ROUTE_SIGN_IN = '/sign-in';
export const ROUTE_ACCOUNTS = '/accounts';
export const ROUTE_SURVEYS = '/surveys';
export const ROUTE_SURVEY = '/surveys/:surveyId';

export const publicRoutes = [
  {
    key: 'sign-in',
    path: ROUTE_SIGN_IN,
    component: SignIn,
  },
  {
    key: 'home',
    path: '/',
    component: Home,
  },
];

export const homePrivateRoutes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    redirectTo: '/surveys',
  },
  {
    key: 'surveys',
    path: ROUTE_SURVEYS,
    component: Surveys,
  },
  {
    key: 'survey',
    path: ROUTE_SURVEY,
    component: Survey,
  },
  {
    key: 'accounts',
    path: ROUTE_ACCOUNTS,
    component: Accounts,
  },
];
