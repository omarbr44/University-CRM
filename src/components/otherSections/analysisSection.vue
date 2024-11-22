
<template>
    <div>
        <div class="p-5 flex justify-between">   
            <div>
                <h2 class="text-right text-sm text-site-text-primary mb-2">اختر التاريخ</h2>
                <Calendar v-model="monthDate" dateFormat="mm/yy" view="month" showIcon iconDisplay="input" panelClass="bg-white !text-site-primary" />
            </div>  
            <h2 class="text-3xl sm:text-xl text-site-text-primary ">تحليلات البلاغات الشهرية</h2>
        </div>
        <div class="card mx-10">
            <Chart type="bar" :data="chartDataMonth" :options="chartOptions" width="180" height="50" />
        </div>
        <div class="p-5 flex justify-between">   
            <div>
                <h2 class="text-right text-sm text-site-text-primary mb-2"> التاريخ</h2>
                <Calendar v-model="yearDate" dateFormat="yy" view="year" showIcon iconDisplay="input" panelClass="bg-white !text-site-primary" />
            </div>  
            <h2 class="text-3xl sm:text-xl text-site-text-primary ">تحليلات البلاغات السنوية</h2>
        </div>
        <div class="card mx-10">
            <Chart type="bar" :data="chartDataYear" :options="chartOptions" width="180" height="50" />
        </div>
            <h2 v-if="userStore.userType == 'ادمن'" class="text-3xl sm:text-xl text-site-text-primary my-7 p-4" style="direction: rtl;">تحليلات المستخدمين </h2>
            <Calendar v-if="userStore.userType == 'ادمن'" v-model="userMonthDate" dateFormat="mm/yy" view="month" showIcon iconDisplay="input" panelClass="bg-white !text-site-primary" class="ml-6" />
        <div v-if="userStore.userType == 'ادمن'" class="card mx-8 flex justify-center">
            <div class="w-1/2 mb-6" >
                <Chart type="doughnut" :data="chartDataUsers" :options="chartOptionsUsers" style="height: 32rem;"/>
            </div>
           <!--  <div class="w-1/2" >
                <Calendar v-model="userMonthDate" dateFormat="yy" view="year" showIcon iconDisplay="input" panelClass="bg-white !text-site-primary" />
                <Chart type="pie" :data="chartDataUsers" :options="chartOptionsUsers" style="height: 32rem;"  />
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useGetRequest } from '../../composables/useRequest'
import moment from "moment";

onMounted(async() => {
    const { Data:month } = await useGetRequest('Analytic?date=2024-06')
    chartDataMonth.value = setChartDataMonth(month.value);
    const { Data:year } = await useGetRequest('Analytic?date=2024')
    chartDataYear.value = setChartDataYear(year.value);
    const { Data:users } = await useGetRequest('topUsers')
    chartDataUsers.value = setChartDataUsers(users.value);
    chartOptions.value = setChartOptions();
    chartOptionsUsers.value = setChartOptionsUsers();
});
import { useUserStore } from '../../stores/user'
const userStore = useUserStore()

const totalReq = ref()
const completedReq = ref()
const chartDataMonth = ref();
const chartDataYear = ref();
const chartDataUsers = ref();
const chartOptions = ref();
const chartOptionsUsers = ref();
const monthDate = ref();
const yearDate = ref();
const userMonthDate = ref();

watch(monthDate,async ()=>{
    const { Data:month } = await useGetRequest('Analytic?date='+moment(monthDate.value).format('YYYY-MM'))
    chartDataMonth.value = setChartDataMonth(month.value);
})
watch(yearDate,async ()=>{
    const { Data:year } = await useGetRequest('Analytic?date='+moment(yearDate.value).format('YYYY'))
    chartDataYear.value = setChartDataYear(year.value);
})
watch(userMonthDate,async ()=>{
    const { Data:users } = await useGetRequest('topUsers?date='+moment(userMonthDate.value).format('YYYY-MM'))
    chartDataUsers.value = setChartDataUsers(users.value);
})

const setChartDataMonth = (month) => {
    return {
        labels: [...Array(30).keys()].map(el =>  el + 1),
        datasets: [
            {
                label: 'البلاغات المنشأة في اليوم',
                data: month.total_requests,
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                borderColor: 'rgb(249, 115, 22)',
                borderWidth: 1
            },
            {
                label: 'البلاغات المكتملة في اليوم',
                data: month.completed_requests,
                backgroundColor: 'rgba(249, 115, 22, 0.8)',
                borderColor: 'rgb(249, 115, 22)',
                borderWidth: 1
            }
        ]
    };
};
const setChartDataYear = (year) => {
    return {
        labels: [...Array(12).keys()].map(el =>  el + 1),
        datasets: [
            {
                label: 'البلاغات المنشأة في الشهر',
                data: year.total_requests,
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                borderColor: 'rgb(6, 182, 212)',
                borderWidth: 1
            },
            {
                label: 'البلاغات المكتملة في الشهر',
                data: year.completed_requests,
                backgroundColor: 'rgba(6, 182, 212, 0.8)',
                borderColor: 'rgb(6, 182, 212)',
                borderWidth: 1
            }
        ]
    };
};
const setChartDataUsers = (users) => {
    return {
        labels: users.users,
        datasets: [
            {
                data: users.completion_rates,
                backgroundColor: ['rgb(100, 116, 139)','rgb(6, 182, 212)','rgb(249, 115, 22)'],
                borderColor: 'rgb(6, 182, 212)',
                borderWidth: 1
            },
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'black'
                },
                grid: {
                    color: '#dbdbdb'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: '#dbdbdb'
                }
            }
        }
    };
}
const setChartOptionsUsers = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            title: {
                display: true,
                text: 'افضل 3 مستخدمين في الشهر'
            },
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};
</script>
