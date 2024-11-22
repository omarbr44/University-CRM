<template>
        <div class="flex w-full gap-5 overflow-hidden">
        <div class="left-section w-2/5 md:w-full sm:w-full p-4">
            <div class="logo mx-auto max-w-fit">
                    <Logo width="78" />
            </div>
            <div class="header mt-20 text-center">
                <h2 class=" text-3xl sm:text-xl text-site-primary">مرحبا بعودتك</h2>
                <p class=" text-xl text-site-text-secondary">تسجيل الدخول</p>
            </div>
            <div class="form-section mt-8" style="direction: rtl;" >
                <form @submit.prevent="submit" class=" flex flex-col gap-10">
                            <div class="border-b-2 border-site-primary ">
                                <FloatLabel>
                                        <InputText class=" border-none focus:ring-0 w-full" id="username" v-model="obj.username" />
                                        <label for="username" class=" text-site-primary" >اسم المستخدم</label>
                                    </FloatLabel>
                            </div>
                            <div >
                                <InlineMessage v-if="requestError?.username">{{requestError?.username[0]}}</InlineMessage>
                                <InlineMessage v-if="requestError?.message">{{requestError?.message}}</InlineMessage>
                            </div>
                            <div class="border-b-2 border-site-primary ">
                                <FloatLabel>
                                        <Password class=" " v-model="obj.password" inputId="password"
                                        promptLabel="ادخل كلمة المرور" weakLabel=" " mediumLabel=" " strongLabel=" "
                                        inputClass=" border-none focus:ring-0 w-full" />
                                        <label for="password" class=" text-site-primary" :class="{'float-label': obj.password }">كلمة المرور</label>
                                    </FloatLabel>
                            </div>
                            <div >
                                <InlineMessage v-if="requestError?.password">{{requestError?.password[0]}}</InlineMessage>
                            </div>
                    <Button :loading="isLoading" type="submit" label="تسجيل الدخول" class=" bg-site-primary w-3/5 mx-auto" />
                </form>
            </div>
        </div>
        <div class="right-section md:hidden sm:hidden w-3/5 bg-site-primary rounded-md flex justify-end flex-col  h-screen"
         style="background-image: linear-gradient(to bottom, #436FCE, #315197, #223868);">
            <img src="../assets/imgs/loginImg.jpg" class=" h-4/5" style="
            position: absolute;
            left: 48rem;
            top: -27rem;
            height: 53rem;">
            <h2 class=" text-xl text-white text-center my-3" style="
            margin-bottom: 7rem;
            align-self: baseline;
            margin-left: 5rem;">"CRM على طريقتنا"</h2>
        </div>
    </div>
</template>

<script setup>
import Logo from './Icon/Logo.vue'
import { ref } from 'vue';
import { usePostRequest,useGetRequest } from '../composables/useRequest'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router';

const user = useUserStore()
const router = useRouter()

    const obj = ref({
        username:null,
        password:null,
        })
    const requestError = ref(null)
    const isLoading = ref(false)
    const submit = async function(){
            isLoading.value = true
            const { Error,Data } = await usePostRequest('login',obj.value)
            requestError.value = Error.value
            isLoading.value = false
            if(!requestError.value){ 
                user.signIn(Data.value.access_token,Data.value.user.type.type,Data.value.user.name,Data.value.user.id,Data.value.user.image,Data.value.permissions)
                const { Data:notification } = await useGetRequest('Notifications/unread')
                user.userNotifications = notification.value
                router.push({name:'RequestsSection',query:{msg:user.userName+' اهلا'}})
            }
    }
</script>

<style>
body {
    overflow-x: hidden;
}
.float-label{
    font-size: 0.875rem;
    line-height: 1.25rem;
    top: -0.75rem !important;
    color: #223769;
}
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
</style>