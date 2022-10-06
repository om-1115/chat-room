<template lang="">
<div>
    <div v-if="showlogin" class="showlogin">
        <div class="signlink" >
            <p>Already have an account? <span @click="showlogin=false">Signup</span> here.</p>
        </div>
        <LoginPage @login="enterchat" />
    </div>
    <div v-else class="showlogin">
        <div class="signlink">
            <p>Already have an account? <span @click="showlogin=true">Login</span> here.</p>
        </div>
        <SignupPage @signup="enterchat" />
    </div>
</div>
</template>

    
<script>
import SignupPage from '../components/signup.vue'
import LoginPage from '../components/login.vue'
import {
    ref
} from 'vue'
import {
    useRouter
} from 'vue-router'
export default {
    components: {
        SignupPage,
        LoginPage
    },
    setup() {
        const router = useRouter()
        const showlogin = ref(true)
        const enterchat = () => {
            router.push({
                name: 'Chatroom'
            })
        }

        return {
            showlogin,
            enterchat
        }
    }
}
</script>

    
<style>
.showlogin {
    height: 100%;
    align-items: center;
}

.signlink {
    text-align: center;
    background: #FF4646;
    margin: 0px;
    padding: 10px 0px;
    color: #fff;
    height: 3%;
    /* position: absolute; */
}

.signlink span {
    text-decoration: underline;
}

.signlink p {
    font-size: 16px;
}
</style>
