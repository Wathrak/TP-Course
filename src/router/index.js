import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Page from '@/views/Page.vue'
import Section from '@/views/Section.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/page/1',
      children: [
        {
          path: 'page/:pageNumber',
          component: Page,
          name: 'page',
          children: [
            {
              component: Section,
              path: 'section/:id',
              name: 'section',
            },
          ],
        },
      ],
    },
  ],
})

export default router
