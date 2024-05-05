import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(null)
  const userName = ref(null)  
  const userType = ref(null)  
  const userid = ref(null)  
  function signIn(token,type,name,id) {
    userToken.value = token
    userName.value = name
    userType.value = type
    userid.value = id
  }
  function signOut() {
    userToken.value = null;
    userType.value = null
    userid.value = null
    //userName.value = null
  }
  return { userToken,userType,userid,userName,signIn,signOut }
},
{
  persist: true
})
