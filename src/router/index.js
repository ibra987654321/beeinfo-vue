import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/MainContent.vue'
import Content from '../components/Content.vue'
import NewsContent from '../components/NewsContent.vue'
// import MainPage from '../views/Main-page.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/ncontent',
    name: 'NewsContent',
    component: NewsContent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
