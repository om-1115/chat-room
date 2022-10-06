import { projectauth } from "../firebase/firebase"
import { ref } from "vue"

const error = ref(null)

const logout = async (email, password)=>{
    error.value= null
    try{
        await projectauth.signOut()
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () =>{
    return {error, logout}
}

export default useLogout