import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import Chatroom from '../views/chatroom.vue'
import { projectauth } from '../firebase/firebase'

// proj auth 
const requireAuth =( to, from, next) =>{
  let user = projectauth.currentUser
  console.log('current user in auth gaurd: ' , user)  //not allowing to user to go back with router
  if(!user){
    next({ name: 'welcome' })
  }
  else{
    next()
  }
}

//not allowing user to go bact through rout i.e rout gaurd
const requirenoAuth = (to, from, next) =>{
  let user = projectauth.currentUser
  
  if(user){
    next({ name: 'Chatroom' })
  }
  else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome,
    beforeEnter: requirenoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/chatroom.vue')
    component: Chatroom,
    beforeEnter: requireAuth 
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: signup
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
