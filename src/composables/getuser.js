import { projectauth } from "../firebase/firebase"
import { ref } from "vue"

const user = ref(projectauth.currentUser)

projectauth.onAuthStateChanged((_user) =>{
    console.log('user state changed. Current user is :', _user)
    user.value = _user
})

const getUser = () =>{
    return{ user }
}

export default getUser