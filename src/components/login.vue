<template>
<div class="home">
    <div class="login">
        
            <h1>Nice to see you!</h1>
            <img src="../assets/sheet.png" alt="">
        
        <!-- <div class="newimg2">

            <img src="../assets/newvector.svg" alt="">
        </div> -->
    </div>
    <div class="login1">
        <form @submit.prevent="handlesubmit">
            <h2>Welcome Back!</h2>
            <div class="input1">
                <input type="text" placeholder="Email" v-model="email" />
            </div>
            <div class="input2">
                <input type="text" placeholder="Password" v-model="password" />
            </div>
            <div class="input3">
                <input type="checkbox" required>
                <label>Remeber me</label>
                <a href="#">Forget password?</a>
            </div>
            <div class="err">
                {{error}}
            </div>
            <div class="btn">
                <button>Login</button>
            </div>
            <!-- <div class="signlink">
                    <p>Already have an account? <router-link to="/signup">Signup</router-link> here.</p>
                </div> -->
        </form>
    </div>
</div>
</template>

    
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
        
    
<script>
import {
    ref
} from 'vue'

import uselogin from '../composables/uselogin'
export default {
    name: 'LoginPage',
    components: {},
    setup(props, context) {
        const {
            error,
            login
        } = uselogin()
        const email = ref('')
        const password = ref('')

        const handlesubmit = async () => {
            console.log(email.value, password.value) //print value to console
            await login(email.value, password.value)
            if (!error.value) {
                console.log("user loged in")
                context.emit('login')
            }

        }

        return {
            email,
            password,
            handlesubmit,
            error
        }
    }
}
</script>
    
        
    
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    overflow-y: hidden;
}

.home {
    display: flex;
    /* background-color: #F4F8FE; */
    height: 100%;
}

.login {
    width: 50%;
    background-image: url('../assets/loginsvg.svg');
    background-size: cover;
    background-color: #050C44;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.newimg {
    position: absolute;
    margin: 280px 80px;
}

.login h1 {
    color: #FFFFFF;
    margin-bottom: 28px;
    text-align: center;
}

.login1 {
    width: 50%;
    background-color: #F4F8FE;
    display: flex;
    justify-content: center;
    flex-direction: column;

}



form {
    margin: 30px auto;
    max-width: 620px;
    text-align: left;
    padding: 40px;
    border-radius: 8px;
    overflow: hidden;

}

form h2 {
    padding-bottom: 44px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height, or 122% */
    letter-spacing: -0.64px;
    color: #050C44;
}

.input1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
}

.input1 input {
    padding: 13px 323px 13px 20px;
    border: 1px solid #D6DCE7;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
}

::placeholder {
    letter-spacing: -0.33px;
    color: #728095;
    opacity: 0.6;
}

.input2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
}

.input2 input {
    padding: 13px 323px 13px 20px;
    border: 1px solid #D6DCE7;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    display: block;

}

.input3 {
    margin: 15px 0 51px 0;
}

.input3 a {
    text-decoration: none;
    /* position: relative; */
    float: right;
    letter-spacing: -0.33px;

    color: #050C44;
}

.input3 label {
    padding-left: 8px;
    color: #050C44;
}

.btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn button {
    padding: 13px 172px;
    background: #FF4646;
    border-radius: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: -0.33px;
    border: none;
    color: #FFFFFF;
    text-align: center;
}

.signlink {
    text-align: center;
    margin-top: 24px;
}

.signlink p {
    font-size: 16px;
}

.signlink a {
    text-decoration: none;
}

.err {
    color: #FF4646;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
}
</style>
