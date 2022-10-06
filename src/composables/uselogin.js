import { projectauth } from "../firebase/firebase"
import { ref } from "vue"

const error = ref(null)

const login = async (email, password)=>{
    error.value = null

    try{
        const res= await projectauth.signInWithEmailAndPassword(email, password)
        error.value= null
        console.log(res.user)
        return res

     }catch(err){
         console.log(err.message)
         error.value= 'Incorrect login credentials'
     }
}


const uselogin = () =>{
    return{ error, login}
}

export default uselogin