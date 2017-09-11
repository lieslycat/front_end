import Vue from 'vue'
import Router from 'vue-router'
import TestForm from '@/components/TestForm'
import TestTable from '@/components/TestTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestForm',
      component: TestForm
    },
    {
      path: '/testtable',
      name: 'TestTable',
      component: TestTable
    }
  ]
})
