import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/TodoList';
import New from '@/components/New';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/new',
      name: 'New',
      component: New,
    },
  ],
});
