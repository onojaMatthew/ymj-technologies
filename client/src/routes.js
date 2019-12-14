import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard/MainDashboard'));
const CoreUIIcons = React.lazy( () => import( './views/Icons/CoreUIIcons' ) );
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy( () => import( './views/Users/User' ) );

const routes = [
  { path: '/', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
