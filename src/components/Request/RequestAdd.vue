<template>
    <div class="flex w-full p-8 sm:p-4 gap-10 my-4">
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
                    <RouterLink to="/requestssection">
                        <Button icon="pi pi-arrow-left" class=" text-2xl sm:text-xl" style="color: #2D2D2D;" />
                    </RouterLink>
                    <Button @click="Object.keys(obj).forEach((i)=> obj[i]=null)" class=" text-2xl sm:text-xl" icon="pi pi-times" style="color: #2D2D2D;" />
                </div>
                <h2 class=" text-3xl sm:text-xl text-site-primary"> بلاغ جديد</h2>
            </div>
            <div class="form-section w-full mt-8" style="direction: rtl;" >
                <form @submit.prevent="submit" class=" flex flex-col gap-10">
                    <div>
                    <div class="flex sm:flex-col gap-2 sm:gap-10">
                        <div class=" w-1/2 sm:w-full">
                            <div class="border-b-2 border-site-primary ">
                                <FloatLabel>
                                        <InputText class=" border-none focus:ring-0 w-full" id="title" v-model="obj.title" />
                                        <label for="title" class=" text-site-primary" >الموضوع</label>
                                    </FloatLabel>
                            </div>
                        </div>
                        <div class="hidden sm:block">
                            <InlineMessage v-if="requestError?.title">{{requestError?.title[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary w-1/2 sm:w-full">
                                <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="category_id" v-model="obj.category_id"  :options="Categories" optionLabel="name" optionValue="id"  class=" border-none w-full focus:ring-0 ring-white outline-0" :inputProps="{required: true}"/>
                                <label for="category_id" class=" text-site-primary" :class="{'float-label': obj.category_id }">نوع البلاغ</label>
                                </FloatLabel>
                        </div>
                        <div class="hidden sm:block">
                            <InlineMessage v-if="requestError?.category_id">{{ requestError?.category_id[0] }}</InlineMessage>
                        </div>                       
                    </div>
                    <div class="errors flex gap2 sm:hidden">
                        <div class="w-1/2">
                            <InlineMessage v-if="requestError?.title">{{requestError?.title[0]}}</InlineMessage>
                        </div>
                        <div class="w-1/2">
                            <InlineMessage v-if="requestError?.category_id">{{ requestError?.category_id[0] }}</InlineMessage>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                <textarea  class=" text-site-text-secondary bg-white border-none focus:ring-0 w-full focus-visible:outline-none" id="description"  
                                    v-model="obj.description">
                                </textarea>
                                <label :class="{'float-label': obj.description }" for="description" class=" text-site-primary">وصف البلاغ</label>
                            </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.description">{{requestError?.description[0]}}</InlineMessage>
                </div>
                <div>
                    <div class="flex gap-2">
                        <div class="border-b-2 border-site-primary w-1/2 pb-3 ">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="college_id" v-model="obj.college_id" :options="colleges" optionLabel="name" optionValue="id"  class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="college_id" class=" text-site-primary" :class="{'float-label': obj.college_id }">الكلية </label>
                            </FloatLabel>
                        </div> 
                        <div v-if="obj.college_id"class="border-b-2 border-site-primary w-1/2 pb-3">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="building_id" v-model="obj.building_id" :options="Buildings" optionLabel="name" optionValue="id" class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="building_id" class=" text-site-primary" :class="{'float-label': obj.building_id }">المبنى </label>
                            </FloatLabel>
                        </div>     
                    </div>
                    <div class="errors flex gap2">
                    <div class="w-1/2">
                        <InlineMessage v-if="requestError?.college_id">{{requestError?.college_id[0]}}</InlineMessage>
                    </div>
                    <div class="w-1/2">
                        <InlineMessage v-if="requestError?.building_id">{{ requestError?.building_id[0] }}</InlineMessage>
                    </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2">
                        <div class="border-b-2 border-site-primary w-1/2 pb-3">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="roomType_id" v-model="obj.roomType_id" :options="RoomTypes" optionLabel="name" optionValue="id" class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="roomType_id" class=" text-site-primary" :class="{'float-label': obj.roomType_id }">نوع الغرفة </label>
                            </FloatLabel>
                        </div> 
                        <div v-if="obj.building_id && obj.roomType_id" class="border-b-2 border-site-primary w-1/2 pb-3">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="room_id" v-model="obj.room_id" :options="Rooms" optionLabel="name" optionValue="id" class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="room_id" class=" text-site-primary" :class="{'float-label': obj.room_id }">الغرفة </label>
                            </FloatLabel>
                        </div> 
                    </div>
                    <div class="errors flex gap2">
                    <div class="w-1/2">
                        <InlineMessage v-if="requestError?.roomType_id">{{requestError?.roomType_id[0]}}</InlineMessage>
                    </div>
                    <div class="w-1/2">
                        <InlineMessage v-if="requestError?.room_id && obj.roomType_id && obj.building_id">{{ requestError?.room_id[0] }}</InlineMessage>
                    </div>
                    </div>
                </div>
                <div class="border-b-2 border-site-primary w-1/2 pb-3 ">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="priority_id" v-model="obj.priority_id" :options="priorities" optionLabel="name" optionValue="id"  class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="priority_id" class=" text-site-primary" :class="{'float-label': obj.priority_id }">الاهمية </label>
                            </FloatLabel>
                </div> 
                <InlineMessage v-if="requestError?.priority_id">{{requestError?.priority_id[0]}}</InlineMessage>
                    <div class="card w-full border-b-2 border-site-primary p-3">
                    <FileUpload  class=" border-none" chooseLabel="اختر الملفات" cancelLabel="الغاء الملفات" :showUploadButton="false"
                     :showCancelButton="true" name="demo[]" @select="onAdvancedUpload"
                      :multiple="true" :maxFileSize="1000000" :pt="{choosebutton:'text-site-primary p-3 items-center cursor-pointer inline-flex', chooseicon:'mt-1 ml-1', filesize:'inline-block', badge:'!hidden',actions:'mr-auto',buttonbar:'border-none',content:'border-none'}">
                        <template #empty>
                            <p>اسحب الملفات إلى هنا</p>
                        </template>
                    </FileUpload>
                    <InlineMessage v-if="requestError?.file_path">{{ requestError?.file_path }}</InlineMessage>
                    </div>
                    <Button :loading="isLoading" type="submit" label="ارسال" class=" bg-site-primary mt-2" />
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref,watch } from 'vue';
import { serialize } from 'object-to-formdata';
import { useGetRequest,usePostRequest } from '../../composables/useRequest'
import { useNotification } from "@kyvg/vue3-notification";
import { useRouter } from 'vue-router';

const router = useRouter()
const { notify }  = useNotification()
    const obj = ref({
        category_id:null,
        title:null,
        description:null,
        college_id:null,
        building_id:null,
        roomType_id:null,
        room_id:null,
        priority_id:null,
        file_path:null,
        })
    const requestError = ref(null)
    const isLoading = ref(false)
    const colleges = ref(null)
    const RoomTypes = ref(null)
    const Categories = ref(null)
    const priorities = ref(null)
    onMounted(async()=>{
        const {Data:collegess } = await useGetRequest('College')
        const {Data:RoomTypess } = await useGetRequest('RoomType')
        const {Data:Categoriess } = await  useGetRequest('Category')
        const {Data:prioritiess } = await  useGetRequest('Priority')
        colleges.value = collegess.value
        RoomTypes.value = RoomTypess.value
        Categories.value = Categoriess.value
        priorities.value = prioritiess.value
    })
    const onAdvancedUpload = function(event){
        obj.value.file_path = event.files
    }   
    const submit = async function(){
            isLoading.value = true
            const formData = serialize(
                obj.value,
            )
            const { Error } = await usePostRequest('Request',formData)
            requestError.value = Error.value
            isLoading.value = false
            if(!requestError.value){
                notify({
                    title: "البلاغات",
                    text: "تم ارسال بلاغك بنجاح",
                    type: 'success',
                });
                setTimeout(router.push('requestssection'),3000)
            }
    }
    // Dependenat values
    const Buildings =ref(null)
    const Rooms =ref(null)
    // to check if user changed on ofthese values to refetch dependant requests
    const oldCollege =ref(null)
    const oldBuilding =ref(null)
    const oldRoomType =ref(null)
    watch(() => obj, async (newValue, oldValue) => {
        if(!isLoading.value && (obj.value.college_id != oldCollege.value || obj.value.building_id != oldBuilding.value || obj.value.roomType_id != oldRoomType.value)){
            const {Data:rooms} = await useGetRequest('Room?build_id='+obj.value.building_id+'&type_id='+obj.value.roomType_id);
            Rooms.value = rooms.value
            const {Data:buildings} = await useGetRequest('Building?college_id='+obj.value.college_id);
            Buildings.value = buildings.value
            if(obj.value.college_id != oldCollege.value)
                obj.value.building_id = null
            if(obj.value.building_id != oldBuilding.value || obj.value.roomType_id != oldRoomType.value)
                obj.value.room_id = null
    
            oldCollege.value = obj.value.college_id
            oldBuilding.value = obj.value.building_id
            oldRoomType.value = obj.value.roomType_id
        }
    }, { deep: true })
</script>

<style scoped>
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
.float-label{
    font-size: 0.875rem;
    line-height: 1.25rem;
    top: -0.75rem;
    color: #223769;
}
</style>