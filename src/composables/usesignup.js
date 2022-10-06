import { projectauth } from "../firebase/firebase"
import { ref } from "vue"

const error = ref(null)
const signup = async(email, password, displayName)=>{
    error.value = null

    try{
       const res= await projectauth.createUserWithEmailAndPassword(email, password)
       if(!res){
        throw new Error("couldn't complete signup")
       }
       await res.user.updateProfile({ displayName })
      ;
       error.value= null
       console.log(res.user)
       return res
    }catch(err){
        console.log(err.message)
        error.value= err.message 
    }
}

const usesignup = () =>{
    return{ error, signup}
}

export default usesignup