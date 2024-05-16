<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
    data() {
        return {
            electric_motors: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    uz: {
                        title: "uch fazali suv nasosi-3hp-ikkita Pervanel (CBT310)",
                    },
                    ru: {
                        title: "Трехфазный водяной насос-3 л.с.-Два рабочих колеса (CBT310)",
                    },
                    en: {
                        title: "Three Phase Water Pump-3HP-Two Impellers (CBT310)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "3 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    uz: {
                        title: "uch fazali suv nasosi-2hp-ikkita Pervanel (CBT 210)",
                    },
                    ru: {
                        title: "Трехфазный водяной насос-2 л.с.-Два рабочих колеса (CBT 210)",
                    },
                    en: {
                        title: "Three Phase Water Pump-2HP-Two Impellers (CBT210)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "2 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    uz: {
                        title: "uch fazali suv nasosi-1,5 ot kuchi-ikkita Pervanel (CBT160)",
                    },
                    ru: {
                        title: "Трехфазный водяной насос-1,5 л.с.-Два рабочих колеса (CBT160)",
                    },
                    en: {
                        title: "Three Phase Water Pump-1.5HP-Two Impellers (CBT160)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "1.5 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi-3hp-ikkita Pervanel (CB310)",
                    },
                    ru: {
                        title: "Однофазный водяной насос-3 л.с.-Два рабочих колеса (CB310)",
                    },
                    en: {
                        title: "Single Phase Water Pump-3HP-Two Impellers (CB310)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "3 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi-2hp-ikkita Pervanel (CB210)",
                    },
                    ru: {
                        title: "Однофазный водяной насос-2 л.с.-Два рабочих колеса (CB210)",
                    },
                    en: {
                        title: "Single Phase Water Pump-2HP-Two Impellers (CB210)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "2 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi-1,5 ot kuchi (CB160)",
                    },
                    ru: {
                        title: "Однофазный водяной насос-1,5 л.с. (CB160)",
                    },
                    en: {
                        title: "Single Phase Water Pump-1.5HP (CB160)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1.5 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4999.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi-1hp (CAM100)",
                    },
                    ru: {
                        title: "Однофазный водяной насос-1 л.с. (CAM100)",
                    },
                    en: {
                        title: "Single Phase Water Pump-1HP (CAM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4997-1.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi - 1hp (KPM100)",
                    },
                    ru: {
                        title: "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                    },
                    en: {
                        title: "Single Phase Water Pump-1HP (KPM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4997-1.jpg",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi - 1hp (KPM100)",
                    },
                    ru: {
                        title: "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                    },
                    en: {
                        title: "Single Phase Water Pump-1HP (KPM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "0.5 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    uz: {
                        title: "ikki pervaneli uch fazali elektropump (CBT210) 2HP",
                    },
                    ru: {
                        title: "Двухвинтовой трехфазный электронасос (CBT210) мощностью 2 л.с.",
                    },
                    en: {
                        title: "Two-propeller three-phase electropump (CBT210) 2HP",
                        specifications: {
                            voltage: "10 Volts",
                        },
                        appearance: {
                            color: "Yellow",
                        },
                    },
                },
                {
                    id: 11,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6027-.png",
                    // ----
                    uz: {
                        title: "bir fazali suv nasosi-1hp (CM100)",
                    },
                    ru: {
                        title: "Однофазный водяной насос мощностью 1 л.с. (CM100)",
                    },
                    en: {
                        title: "Single Phase Water Pump-1HP (CM100)",
                        specifications: {
                            Power: "1 HP",
                            Impeller: "Single-Impeller",
                            Phase: "1",
                        },
                    },
                },
            ]
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

                <swiper-slide v-for="item of this.electric_motors" :key="item.id">
                    <div class="h-[100%] w-[100%] sm:flex sm:mx-auto sm:max-w-[1200px] sm:py-[20px] sm:items-center">
                        <figure class="h-[300px] sm:flex-1 w-[100%] sm:order-1">
                            <img class="h-[100%] w-[100%] object-cover" :src="item.img" alt="image">
                        </figure>
                        <div class="sm:flex-1">
                            <h3
                                class="max-w-[80%] sm:text-[32px] sm:w-[100%] sm:text-left mx-auto font-[600] capitalize">
                                {{ item[$t('lang')].title }}</h3>

                            <div v-if="item.en.appearance"
                                class="max-w-[80%] flex-col min-h-[50px] flex rounded-[10px] justify-between items-start border-[1px] h-[max-content] mx-auto sm:mt-[40px] mt-[20px]">
                                <div
                                    class="p-[10px] text-[16px] text-[#032055] font-[500] w-[100%] text-left border-b-[1px] sm:text-[22px]">
                                    {{ $t("app") }}</div>
                                <div class="flex justify-between py-[10px] gap-[10px] px-[10px] w-[100%]">
                                    <div class="flex-1 sm:text-[20px] text-[15px] text-left">{{ $t("fm") }}:</div>
                                    <div class="flex-1 sm:text-[20px] text-[15px] text-left">{{
                                        item.en.appearance.FrameMaterial }}
                                    </div>
                                </div>
                            </div>

                            <div
                                class="overflow-x-auto max-w-[80%] sm:p-[10px] pr-[10px] rounded-[10px] sm:mt-[40px] mt-[40px] border-[1px] mx-auto">
                                <table class="table">
                                    <!-- head -->
                                    <thead>
                                        <tr>
                                            <th v-if="item.en.specifications.size"
                                                class="text-[#032055] sm:text-[18px] pl-[10px] px-[5px]">{{ $t("Size")
                                                }}</th>
                                            <th v-if="item.en.specifications.pole"
                                                class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                    $t("Pole") }}</th>
                                            <th v-if="item.en.specifications.Power"
                                                class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                    $t("Power") }}</th>
                                            <th v-if="item.en.specifications.type"
                                                class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                    $t("Type") }}</th>
                                            <th v-if="item.en.specifications.Impeller"
                                                class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                    $t("Impeller") }}</th>
                                            <th v-if="item.en.specifications.Phase"
                                                class="text-[#032055] sm:text-[18px] px-[5px]">{{
                                                    $t("Phase") }}</th>
                                                    

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- row 1 -->
                                        <tr>
                                            <td class="px-[5px] pl-[10px]" v-if="item.en.specifications.size">{{ item.en.specifications.size }}</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.pole">{{ item.en.specifications.pole }}</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.Power">{{ item.en.specifications.Power }}</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.type">{{ item.en.specifications.type }}</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.Impeller">{{ item.en.specifications.Impeller }}</td>
                                            <td class="px-[5px]" v-if="item.en.specifications.Phase">{{ item.en.specifications.Phase }}</td>
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
