import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
const Page1 = () => import("@/views/page1/Page1")
const Page2 = () => import("@/views/page2/Page2")
const Page3 = () => import("@/views/page3/Page3")
const Page4 = () => import("@/views/page4/Page4")
const Page5 = () => import("@/views/page5/Page5")
const Page6 = () => import("@/views/page6/Page6")
const P1right = () => import("@/views/page1/P1right")
const P1error = () => import("@/views/page1/P1error")
const Last = () => import("@/views/Last")

const routes = [
  {
    path: '/',
    redirect:"/index"
  },
  {
    path:"/index",
    name:"Index",
    component:Index
  },
  {
    path:"/page1",
    name:"Page1",
    component:Page1
  },
  {
    path:"/page2",
    name:"Page2",
    component:Page2
  },
  {
    path:"/page3",
    name:"Page3",
    component:Page3
  },
  {
    path:"/page4",
    name:"Page4",
    component:Page4
  },
  {
    path:"/page5",
    name:"Page5",
    component:Page5
  },
  {
    path:"/page6",
    name:"Page6",
    component:Page6
  },
  {
    path:"/p1right",
    name:"P1right",
    component:P1right
  },
  {
    path:"/p1error",
    name:"P1error",
    component:P1error
  },
  {
    path:"/last",
    name:"Last",
    component:Last
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
