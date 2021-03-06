export default [
  {
    path: '/',
    name: 'EE',
    flatMenu: true,
    routes: [
      {
        path: '/',
        redirect: './center',
      },
      {
        path: '/center',
        name: 'center',
        icon: 'user',
        component: './center',
      },
      {
        path: '/doctors',
        name: 'doctors',
        icon: 'table',
        component: './doctors',
        access: 'canPatient',
      },
      {
        path: '/reservations',
        name: 'reservations',
        icon: 'table',
        component: './reservations',
        access: 'canDoctor',
      },
      {
        path: '/detail',
        name: 'detail',
        icon: 'profile',
        component: './detail',
        access: 'canDoctor',
        hideInMenu: true,
      },
      {
        component: '404',
      },
    ],
  },

  {
    component: '404',
  },
];