<template lang="">
  <div class="container">
    <NavBar/>
    <ChatWindow/>
    <NewChatForm/> 
  </div>
</template>
<script>

  
import getUser from '../composables/getuser'
// import router from '@/router'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/navbar.vue'
import NewChatForm from '../components/newchatform.vue'
import ChatWindow from '../components/chatwindow.vue'

export default {
  name: 'ChatRoom',
  components:{NavBar , NewChatForm , ChatWindow},
  setup(){
    const {user} = getUser()
    const router = useRouter()
    watch( user, ()=>{
      if(!user.value){
        router.push({ name: 'welcome' })
      }
    })

   }
}
</script>
<style >
  .container{
    width: 70%;
  height: max-content;
  overflow: hidden;
    margin: 80px auto;
    border-radius: 15px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background: #050C44;
}

</style>