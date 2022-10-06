<template>
    <textarea placeholder="Type a message and hit enter" v-model="message" @keypress.enter.prevent="handlesubmit"></textarea>
    <div class="error">{{error}}</div>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getuser';
import { timestamp } from '@/firebase/firebase';
import useCollection from '@/composables/usecollections';
export default {
    setup(){
        const {user} = getUser()
        const message = ref('')
        const { addDoc , error} = useCollection('messages')

        const handlesubmit = async ()=>{
            const chat = {
                name: user.value.displayName , 
                message: message.value,
                createdAt: timestamp()
            }
            console.log(chat)
            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
            
        }
        return { message, handlesubmit, error }
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea{
        width: 98%;
        max-width: 100%;
        margin: 8px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 8px;
        outline: none;
    }
    
</style>
