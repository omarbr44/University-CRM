import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(null)
  const userName = ref(null)  
  const userImg = ref(null)  
  const userType = ref(null)  
  const userid = ref(null)  
  const userPermissions = ref(null)  
  const userNotifications = ref(null)  
  function signIn(token,type,name,id,img,permissions) {
    userToken.value = token
    userName.value = name
    userType.value = type
    userid.value = id
    userImg.value = img
    userPermissions.value = permissions
    
  }
  function signOut() {
    userToken.value = null;
    userType.value = null
    userid.value = null
    userNotifications.value = null
    userImg.value = null
    userName.value = null
    userPermissions.value = null
  }
  return { userToken,userType,userid,userName,userImg,userNotifications,userPermissions,signIn,signOut }
},
{
  persist: true
})
