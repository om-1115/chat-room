import { ref , watchEffect} from 'vue'
import { projectFirestore } from '../firebase/firebase' 

const getcollection= (collection) =>{
    const document = ref(null)
    const error = ref(null)

    let collectionref = projectFirestore.collection(collection)
        .orderBy('createdAt')
        
    const unsub = collectionref.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach((doc) =>{
            doc.data().createdAt && results.push({...doc.data() , id: doc.id})
        })
        document.value = results
        error.value = null
    }, (err)=>{
        console.log(err.message)
        document.value = null
        error.value ='could not fetch data'
    })  

    watchEffect((onInvalidate) =>{
        //unsub from prev collection when watch get stopped
        onInvalidate(() => unsub() )
    })  
    return{ document, error}  
}

export default getcollection