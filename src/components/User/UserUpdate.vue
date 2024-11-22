<template>
    <div class="flex w-full p-8 sm:p-4 gap-10 my-4" v-if="obj">
        <div class="left-section md:hidden sm:hidden w-1/3 bg-site-primary rounded-md flex flex-col items-center"
         style="background-image: linear-gradient(to bottom, #436FCE, #315197, #223868);">
            <div class="logo my-20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="212" zoomAndPan="magnify" viewBox="0 0 159 181.5" height="242" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="df91a46a46"><path d="M 0.21875 40.707031 L 25.65625 40.707031 L 25.65625 115.625 L 0.21875 115.625 Z M 0.21875 40.707031 " clip-rule="nonzero"/></clipPath><clipPath id="8bfe9fe1b8"><path d="M 0.21875 98.390625 L 0.21875 40.78125 L 25.65625 58.019531 L 25.65625 115.625 Z M 0.21875 98.390625 " clip-rule="nonzero"/></clipPath><clipPath id="c2bf657004"><path d="M 33.542969 17.464844 L 58.980469 17.464844 L 58.980469 99.042969 L 33.542969 99.042969 Z M 33.542969 17.464844 " clip-rule="nonzero"/></clipPath><clipPath id="fba6ab8a55"><path d="M 33.542969 81.808594 L 33.542969 17.46875 L 58.980469 34.707031 L 58.980469 99.042969 Z M 33.542969 81.808594 " clip-rule="nonzero"/></clipPath><clipPath id="fc76eac0a3"><path d="M 65.875 45.242188 L 91.3125 45.242188 L 91.3125 137.949219 L 65.875 137.949219 Z M 65.875 45.242188 " clip-rule="nonzero"/></clipPath><clipPath id="a2cfe56f50"><path d="M 65.875 120.710938 L 65.875 45.269531 L 91.3125 62.503906 L 91.3125 137.949219 Z M 65.875 120.710938 " clip-rule="nonzero"/></clipPath><clipPath id="e14975a3bb"><path d="M 99.539062 64.464844 L 124.976562 64.464844 L 124.976562 180.921875 L 99.539062 180.921875 Z M 99.539062 64.464844 " clip-rule="nonzero"/></clipPath><clipPath id="cfd8bc63bd"><path d="M 99.539062 163.683594 L 99.539062 64.492188 L 124.976562 81.726562 L 124.976562 180.921875 Z M 99.539062 163.683594 " clip-rule="nonzero"/></clipPath><clipPath id="62e7340dc9"><path d="M 133.203125 0 L 158.640625 0 L 158.640625 140.132812 L 133.203125 140.132812 Z M 133.203125 0 " clip-rule="nonzero"/></clipPath><clipPath id="f3abaee14a"><path d="M 133.203125 122.898438 L 133.203125 -0.0078125 L 158.640625 17.230469 L 158.640625 140.132812 Z M 133.203125 122.898438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#df91a46a46)"><g clip-path="url(#8bfe9fe1b8)"><path fill="#ffffff" d="M 0.21875 115.625 L 0.21875 40.804688 L 25.65625 40.804688 L 25.65625 115.625 Z M 0.21875 115.625 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#c2bf657004)"><g clip-path="url(#fba6ab8a55)"><path fill="#ffffff" d="M 33.542969 99.042969 L 33.542969 17.464844 L 58.980469 17.464844 L 58.980469 99.042969 Z M 33.542969 99.042969 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#fc76eac0a3)"><g clip-path="url(#a2cfe56f50)"><path fill="#ffffff" d="M 65.875 137.949219 L 65.875 45.242188 L 91.3125 45.242188 L 91.3125 137.949219 Z M 65.875 137.949219 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#e14975a3bb)"><g clip-path="url(#cfd8bc63bd)"><path fill="#ffffff" d="M 99.539062 180.921875 L 99.539062 64.464844 L 124.976562 64.464844 L 124.976562 180.921875 Z M 99.539062 180.921875 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#62e7340dc9)"><g clip-path="url(#f3abaee14a)"><path fill="#ffffff" d="M 133.203125 140.132812 L 133.203125 0.03125 L 158.640625 0.03125 L 158.640625 140.132812 Z M 133.203125 140.132812 " fill-opacity="1" fill-rule="nonzero"/></g></g></svg>
            </div> 
            <h2 class=" text-xl text-white text-center my-3"> تقديم بلاغات للجامعة<br>بشأن مشاكل الصيانة</h2>
            <h2 class=" text-sm  text-site-dark-background text-center mx-3">يساعد في اصلاح المشاكل بسرعه وفعالية، وتحسين بيئة الجامعة<br> وضمان سلامتها. كما يساهم في تعزيز راجة ورضا الطلاب والموظفين</h2>
        </div>
        <div class="right-section w-2/3 md:w-full sm:w-full">
            <div class="header flex items-center justify-between">
                <div>
                    <!-- <RouterLink to="/usertype">
                        <Button icon="pi pi-arrow-left" class=" text-2xl sm:text-xl" style="color: #2D2D2D;" />
                    </RouterLink> -->
                    <Button @click="Object.keys(obj).forEach((i)=> obj[i]=null)" class=" text-2xl sm:text-xl" icon="pi pi-times" style="color: #2D2D2D;" />
                </div>
                <h2 class=" text-3xl sm:text-xl text-site-primary"> تعديل بيانات الحساب</h2>
            </div>
            <div class="form-section w-full mt-8" style="direction: rtl;" >
                <form @submit.prevent="submit" class=" flex flex-col gap-10">
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                            <InputText class=" border-none focus:ring-0 w-full" id="name" v-model="obj.name" />
                            <label for="name" class=" text-site-primary" >الاسم الكامل</label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.username">{{requestError?.name[0]}}</InlineMessage>
                </div>
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                            <InputText class=" border-none focus:ring-0 w-full" id="username" v-model="obj.username" />
                            <label for="username" class=" text-site-primary" >اسم المستخدم</label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.username">{{requestError?.username[0]}}</InlineMessage>
                </div>
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                            <InputText class=" border-none focus:ring-0 w-full" id="phone" v-model="obj.phone" />
                            <label for="phone" class=" text-site-primary" > رقم الجوال</label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.phone">{{requestError?.phone[0]}}</InlineMessage>
                </div>
                <div class="border-b-2 border-site-primary " v-if="userStore.userType == 'ادمن'">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="user_type_id" v-model="obj.UserType.id" :options="userTypes" optionLabel="type" optionValue="id" class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="user_type_id" class=" text-site-primary" :class="{'float-label': obj.UserType.id }">الصفة الإدارية</label>
                            </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.user_type_id">{{requestError?.user_type_id[0]}}</InlineMessage>
                </div>
                <!-- <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="obj.password" inputId="password"
                                    promptLabel="ادخل كلمة المرور" weakLabel="ضعيفة" mediumLabel="متوسطة" strongLabel="صعبة"
                                    inputClass=" border-none focus:ring-0 w-full" />
                                    <label for="password" class=" text-site-primary" :class="{'float-label': obj.password }">كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password">{{requestError?.password[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="obj.password_confirmation" inputId="password_confirmation" promptLabel="ادخل تأكيد كلمة المرور"
                                    inputClass=" border-none focus:ring-0 w-full" weakLabel=" " mediumLabel=" " strongLabel=" " />
                                    <label for="password_confirmation" class=" text-site-primary" :class="{'float-label': obj.password_confirmation }">تأكيد كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password_confirmation">{{requestError?.password_confirmation[0]}}</InlineMessage>
                        </div> -->
                <template v-if="userStore.userType == 'ادمن'">
                    <label class=" text-site-primary" >الصلاحيات</label>
                    <Listbox v-model="obj.permission" :options="permissions" multiple optionLabel="display_name" optionValue="id" class="w-full overflow-y-auto h-80" />
                </template>
                <div class="card w-full border-b-2 border-site-primary p-3">
                        <FileUpload  class=" border-none" chooseLabel="اختر الصورة" cancelLabel="الغاء الصورة" :showUploadButton="false"
                        :showCancelButton="true" name="demo" @select="onAdvancedUpload"
                        :multiple="false" accept="image/*" :maxFileSize="1000000" :pt="{choosebutton:'text-site-primary p-3 items-center cursor-pointer inline-flex', chooseicon:'mt-1 ml-1', filesize:'inline-block', badge:'!hidden',actions:'mr-auto',buttonbar:'border-none',content:'border-none'}">
                            <template #empty>
                                <p>اسحب الصورة إلى هنا</p>
                            </template>
                        </FileUpload>
                        <InlineMessage v-if="requestError?.image">{{ requestError?.image }}</InlineMessage>
                </div>
                    <Button :loading="isLoading" type="submit" label="ارسال" class=" bg-site-primary mt-2" />
                </form>
            </div>
            <h2 class=" text-3xl sm:text-xl text-site-primary my-6" style="direction: rtl;">تغيير كلمة السر</h2>
            <div class="form-section w-full mt-8" style="direction: rtl;" >
                <form @submit.prevent="resetPassword" class=" flex flex-col gap-10">
                    <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="objj.password" inputId="password"
                                    promptLabel="ادخل كلمة المرور" weakLabel="ضعيفة" mediumLabel="متوسطة" strongLabel="صعبة"
                                    inputClass=" border-none focus:ring-0 w-full" />
                                    <label for="password" class=" text-site-primary" :class="{'float-label': objj.password }">كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password">{{requestError?.password[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="objj.password_confirmation" inputId="password_confirmation" promptLabel="ادخل تأكيد كلمة المرور"
                                    inputClass=" border-none focus:ring-0 w-full" weakLabel=" " mediumLabel=" " strongLabel=" " />
                                    <label for="password_confirmation" class=" text-site-primary" :class="{'float-label': objj.password_confirmation }">تأكيد كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password_confirmation">{{requestError?.password_confirmation[0]}}</InlineMessage>
                        </div>
                    <Button :loading="isLoadingg" type="submit" label="ارسال" class=" bg-site-primary mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../../stores/user'
import { onMounted, ref } from 'vue';
import { useGetRequest,usePutRequest,usePostRequest } from '../../composables/useRequest';
import { useRoute,useRouter } from 'vue-router';
import { serialize } from 'object-to-formdata';
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const obj = ref()
const objj = ref({
    password:null,
    password_confirmation:null
})
const userTypes = ref()
const requestError = ref()
const permissions = ref()
const isLoading = ref(false)
const isLoadingg = ref(false)
onMounted(async() => {
    const { Data } = await useGetRequest('User/'+route.params.id)
    obj.value = Data.value
    const {Data:permissionss} = await useGetRequest('Permission?pagination=none')
        permissions.value = permissionss.value
    const {Data:types } = await useGetRequest('UserType')
    userTypes.value = types.value
});
const submit = async function(){
            isLoading.value = true
            obj.value.user_type_id = obj.value.UserType.id
            const formData = serialize(
                obj.value,
            )
            const { Error,Data } = await usePutRequest('User/'+route.params.id,obj.value)
            requestError.value = Error.value
            isLoading.value = false
            if(Data.value.user){
                console.log(Data.value.user)
                notify({
                    title: "الحساب",
                    text: "تم تعديل الحساب بنجاح",
                    type: 'success',
                });
                setTimeout(router.go(-1),3000)
            }           
    }
const resetPassword = async function(){
    isLoadingg.value = true
            const { Error,Data } = await usePostRequest('changePassword/'+route.params.id,objj.value)
            requestError.value = Error.value
            isLoadingg.value = false
            if(Data.value.message){
                console.log(Data.value.message)
                notify({
                    title: "الحساب",
                    text: "تم تغيير كلمة السر بنجاح",
                    type: 'success',
                });
                setTimeout(router.go(-1),3000)
            }           
}
const onAdvancedUpload = function(event){
        obj.value.image = event.files[0]
    }   
</script>

<style>
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
.float-label{
font-size: 0.875rem;
line-height: 1.25rem;
top: -0.75rem !important;
color: #223769;
}
li[data-p-highlight="true"] {
    background-color: #223769 !important;
    color: white !important;
}
li[data-p-highlight] {
    margin: 1rem !important;
    border-radius: 5px !important;
}
</style>