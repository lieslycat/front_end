import Vue from 'vue'
import Router from 'vue-router'
import TestForm from '@/components/TestForm'
import TestTable from '@/components/TestTable'
import Material from '@/components/Folder'

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
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    }
  ]
})
