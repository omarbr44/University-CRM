import axios from "axios";
import geturl from "./geturl";
import { ref } from "vue";
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const url = geturl()
   export async function useGetRequest(api){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.get(url+api,{
        headers:{"Authorization": "Bearer "+userStore.userToken}
      });
      Data.value = data.data ? data.data : data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }

   export async function usePostRequest(api,body){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.post(url+api,body,{
        headers:{"Authorization": "Bearer "+userStore.userToken},
  
      });
      Data.value = data.data || data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }
   export async function usePutRequest(api,body){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.put(url+api,body,{
        headers:{"Authorization": "Bearer "+userStore.userToken},
      });
      Data.value = data.data || data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }
   export async function useDeleteRequest(api){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.delete(url+api,{
        headers:{"Authorization": "Bearer "+userStore.userToken},
      });
      Data.value = data.data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }