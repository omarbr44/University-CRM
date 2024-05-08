import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(null)
  const userName = ref(null)  
  const userImg = ref(null)  
  const userType = ref(null)  
  const userid = ref(null)  
  const userNotifications = ref(null)  
  function signIn(token,type,name,id,img) {
    userToken.value = token
    userName.value = name
    userType.value = type
    userid.value = id
    userImg.value = img
  }
  function signOut() {
    userToken.value = null;
    userType.value = null
    userid.value = null
    userNotifications.value = null
    userImg.value = null
    //userName.value = null
  }
  return { userToken,userType,userid,userName,userImg,userNotifications,signIn,signOut }
},
{
  persist: true
})
