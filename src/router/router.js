const routes = [
  {
    name: '/',
    path: '/',
    component: () => import('../view/sticky-notes/index.vue')
  },
  {
    name: 'sticky-notes',
    path: '/sticky-notes',
    component: () => import('../view/sticky-notes/index.vue')
  },
  {
    name: 'floatingWindow',
    path: '/floating-window',
    component: () => import('../view/floating-window/index.vue')
  },
];

export default routes
