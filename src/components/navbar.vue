<template lang="">
<nav v-if="user">
    <div>
        <p>Hey there {{user.displayName}}</p>
        <p class="email">Currently logged in as {{user.email}}</p>
    </div>
    <button @click="handleclick">Logout</button>
</nav>
</template>

<script>
import useLogout from '../composables/userlogout'
import getUser from '../composables/getuser'
export default {
    setup(){
        const {
            error,
            logout
        } = useLogout()
        const { user } = getUser()
        const handleclick = async() =>{
            await logout()
            if(!error.value){
                console.log("user logged out")
            }
        }
        return{ handleclick ,user}
    }
}
</script>

<style>
nav {
    padding: 20px 28px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    /* text-align: center; */
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #fff;
}

nav p.email {
    font-size: 14px;
    color: #bbbbbb;
}

button {
    padding: 2px 40px;
    border-radius: 8px;
    font-weight: bold;
    color: #050C44;
    background: #fff;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    border: none;
}
</style>
