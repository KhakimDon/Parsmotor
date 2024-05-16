<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useElectricMotors } from "../stores/electric_motors"
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
    data() {
        return {
            useElectricMotors: useElectricMotors()
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};

</script>

<template>
    <div>
        <div class="header bg-white py-[10px] sm:px-[200px] flex justify-between px-[10px]">
            <div @click="$router.push('/')" class="flex cursor-pointer items-center justify-center gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-[#184271]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <span class="text-[#184271]">{{ $t("b") }}</span>
            </div>
            <img class="h-[50px]" src="https://parsmotor.uz/assets/logo-sLLg3iYW.png" alt="image">
        </div>
        <!-- <div
            class="h-[50px] max-w-[90%] justify-between p-[10px] flex items-center mx-auto border-[#315e91] text-[#184271] border-[1px] my-[10px] rounded-[8px]">
            <span>Filter</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

        </div> -->
        <div class="h-[83vh]">
            <swiper :pagination="{
                type: 'fraction',
            }" :navigation="true" :modules="modules" class="mySwiper sm:max-w-[1300px]">

                <swiper-slide v-for="item of useElectricMotors.electric_motors" :key="item.id">
                    <div class="h-[100%] w-[100%] sm:flex sm:mx-auto sm:max-w-[1200px] sm:py-[20px] sm:items-center">
                        <figure class="h-[300px] sm:flex-1 w-[100%] sm:order-1">
                            <img class="h-[100%] w-[100%] object-cover" :src="item.img" alt="image">
                        </figure>
                        <div class="sm:flex-1">
                            <h3 class="max-w-[80%] sm:text-[32px] sm:w-[100%] sm:text-left mx-auto font-[600] capitalize">{{ item[$t('lang')].title }}</h3>

                            <div v-if="item.en.appearance"
                                class="max-w-[80%] flex-col min-h-[50px] flex rounded-[10px] justify-between items-start border-[1px] h-[max-content] mx-auto sm:mt-[40px] mt-[20px]">
                                <div
                                    class="p-[10px] text-[16px] text-[#032055] font-[500] w-[100%] text-left border-b-[1px] sm:text-[22px]">
                                    {{ $t("app") }}</div>
                                <div class="flex justify-between py-[10px] gap-[10px] px-[10px] w-[100%]">
                                    <div class="flex-1 sm:text-[20px] text-[15px] text-left">{{ $t("fm") }}:</div>
                                    <div class="flex-1 sm:text-[20px] text-[15px] text-left">{{ item.en.appearance.FrameMaterial }}
                                    </div>
                                </div>
                            </div>

                            <div
                                class="overflow-x-auto max-w-[80%] sm:p-[10px] pr-[10px] rounded-[10px] sm:mt-[40px] mt-[10px] border-[1px] mx-auto">
                                <table class="table">
                                    <!-- head -->
                                    <thead>
                                        <tr>
                                            <th v-if="item.en.specifications.size"
                                                class="text-[#032055] sm:text-[18px] pl-[10px] px-[5px]">{{ $t("Size") }}</th>
                                            <th v-if="item.en.specifications.pole" class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                $t("Pole") }}</th>
                                            <th v-if="item.en.specifications.Power" class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                $t("Power") }}</th>
                                            <th v-if="item.en.specifications.type" class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                $t("Type") }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- row 1 -->
                                        <tr>
                                            <td class="px-[5px] pl-[10px]" v-if="item.en.specifications.size">132</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.pole">6</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.Power">5.5 kW</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.type">IMB34</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
