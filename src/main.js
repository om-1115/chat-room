import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {projectauth} from './firebase/firebase'


let app

projectauth.onAuthStateChanged(()=>{
    if(!app){
        app= createApp(App).use(router).mount('#app')
    }
})


