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
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4935.jpg",
                    // ----
                    uz: {
                        title: "havo pardasi dvigateli-90 Vt",
                    },
                    ru: {
                        title: "Двигатель воздушной завесы-90 Вт",
                    },
                    en: {
                        title: "Air Curtain Motor-90W",
                        specifications: {
                            Power: "90 W",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5714.png",
                    // ----
                    uz: {
                        title: "havo pardasi dvigateli-45 Vt",
                    },
                    ru: {
                        title: "Двигатель воздушной завесы-45 Вт",
                    },
                    en: {
                        title: "Air Curtain Motor-45W",
                        specifications: {
                            Power: "45 W",
                        },
                    },
                },

                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                    // ----
                    uz: {
                        title: "kanalli Split Motor (konditsioner)-600 Vt",
                    },
                    ru: {
                        title: "Двигатель с разделением каналов (кондиционер)-600 Вт",
                    },
                    en: {
                        title: "Duct Split Motor (Air-conditioner)-600W",
                        specifications: {
                            Power: "600 W",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                    // ----
                    uz: {
                        title: "kanalli Split Motor (konditsioner)-360 Vt",
                    },
                    ru: {
                        title: "Двигатель с разделением каналов (кондиционер)-360 Вт",
                    },
                    en: {
                        title: "Duct Split Motor (Air-conditioner)-360W",
                        specifications: {
                            Power: "360 W",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                    // ----
                    uz: {
                        title: "kanalli Split Motor (konditsioner)-250 Vt",
                    },
                    ru: {
                        title: "Двигатель с разделением каналов (кондиционер)-250 Вт",
                    },
                    en: {
                        title: "Duct Split Motor (Air-conditioner)-250W",
                        specifications: {
                            Power: "250 W",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                    // ----
                    uz: {
                        title: "kanalli Split Motor (konditsioner)-187 Vt",
                    },
                    ru: {
                        title: "Двигатель с разделением каналов (кондиционер)-187 Вт"
                    },
                    en: {
                        title: "Duct Split Motor (Air-conditioner)-187W",
                        specifications: {
                            Power: "187 W",
                        },
                    },
                },

                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                    // ----
                    uz: {
                        title: "kanalli Split Motor (konditsioner)-600 Vt",
                    },
                    ru: {
                        title: "Двигатель с разделением каналов (кондиционер)-600 Вт",
                    },
                    en: {
                        title: "Duct Split Motor (Air-conditioner)-600W",
                        specifications: {
                            Power: "45 W",
                        },
                    },
                },

                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                    // ----
                    uz: {
                        title: "kaput puflagich-AL (to'rt tezlikda)",
                    },
                    ru: {
                        title: "Вытяжной вентилятор-AL (четырехскоростной)",
                    },
                    en: {
                        title: "Hood Blower-AL (Four-speed)",
                        specifications: {
                            ConductorMaterial: "AL",
                            Speed: "four-speed",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                    // ----
                    uz: {
                        title: "Kaputli puflagich (to'rt tezlikli)",
                    },
                    ru: {
                        title: "Вытяжной вентилятор (четырехскоростной)",
                    },
                    en: {
                        title: "Hood Blower (Four-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Three-speed",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                    // ----
                    uz: {
                        title: "Hood Motor-yagona mil-AL (to'rt-tezlikda)",
                    },
                    ru: {
                        title: "Вытяжной двигатель-Одновальный-AL (четырехскоростной)",
                    },
                    en: {
                        title: "Hood Motor-Single Shaft-AL (Four-speed)",
                        specifications: {
                            ConductorMaterial: "AL",
                            Speed: "four-speed",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                    // ----
                    uz: {
                        title: "Kaputli puflagich (uch tezlikli)",
                    },
                    ru: {
                        title: "Вытяжной вентилятор (трехскоростной)",
                    },
                    en: {
                        title: "Hood Blower (Three-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Three-speed",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                    // ----
                    uz: {
                        title: "Hood Motor-yagona mil (to'rt-tezlikda)",
                    },
                    ru: {
                        title: "Вытяжной двигатель-одновальный (четырехскоростной)",
                    },
                    en: {
                        title: "Hood Motor-Single Shaft (Four-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "four-speed",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4982.png",
                    // ----
                    uz: {
                        title: "Hood Motor-yagona mil (uch-tezlikda)",
                    },
                    ru: {
                        title: "Вытяжной двигатель-одновальный (трехскоростной)",
                    },
                    en: {
                        title: "Hood Motor-Single Shaft (Three-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Three-speed",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                    // ----
                    uz: {
                        title: "Hood Motor-yagona mil (uch-tezlikda)",
                    },
                    ru: {
                        title: "Двигатель вытяжки-одновальный (трехскоростной)",
                    },
                    en: {
                        title: "Hood Motor-Single Shaft (Three-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Three-speed",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                    // ----
                    uz: {
                        title: "Hood Motor-turi K (to'rt-tezlikda)",
                    },
                    ru: {
                        title: "Двигатель вытяжки-Тип K (четырехскоростной)",
                    },
                    en: {
                        title: "Hood Motor-Type K (Four-speed)",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "four-speed",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-45 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-45 Вт",
                    },
                    en: {
                        title: "Fan Motor-45W",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Single-speed",
                            Power: "45 W",
                        },
                    },
                },
                {
                    id: 11,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-25 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-25 Вт",
                    },
                    en: {
                        title: "Fan Motor-25W",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Two-speed",
                            Power: "25 W",
                        },
                    },
                },
                {
                    id: 12,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-30 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-30 Вт",
                    },
                    en: {
                        title: "Fan Motor-30W",
                        specifications: {
                            ConductorMaterial: "CU",
                            Speed: "Two-speed",
                            Power: "30 W",
                        },
                    },
                },
                {
                    id: 13,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-25 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-25 Вт",
                    },
                    en: {
                        title: "Fan Motor-25W",
                        specifications: {
                            ConductorMaterial: "CU",
                            Power: "25 W",
                        },
                    },
                },
                {
                    id: 14,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-16 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-16 Вт",
                    },
                    en: {
                        title: "Fan Motor-16W",
                        specifications: {
                            ConductorMaterial: "AL",
                            Power: "16 W",
                        },
                    },
                },
                {
                    id: 15,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-10 Vt-AL",
                    },
                    ru: {
                        title: "Двигатель вентилятора-10 Вт-AL",
                    },
                    en: {
                        title: "Fan Motor-10W-AL",
                        specifications: {
                            ConductorMaterial: "AL",
                            Power: "10 W",
                        },
                    },
                },
                {
                    id: 16,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-10 Vt",
                    },
                    ru: {
                        title: "Двигатель вентилятора-10 Вт",
                    },
                    en: {
                        title: "Fan Motor-10W",
                        specifications: {
                            ConductorMaterial: "CU",
                            Power: "10 W",
                        },
                    },
                },
                {
                    id: 17,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-5 Vt-AL",
                    },
                    ru: {
                        title: "Двигатель вентилятора-5 Вт-AL",
                    },
                    en: {
                        title: "Fan Motor-5W-AL",
                        specifications: {
                            ConductorMaterial: "AL",
                            Power: "5 W",
                        },
                    },
                },
                {
                    id: 18,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                    // ----
                    uz: {
                        title: "Fan Motor-5 Vt-AL",
                    },
                    ru: {
                        title: "Двигатель вентилятора-5 Вт-AL",
                    },
                    en: {
                        title: "Fan Motor-5W-AL",
                        specifications: {
                            ConductorMaterial: "CU",
                            Power: "5 W",
                        },
                    },
                },
                {
                    id: 19,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                    // ----
                    uz: {
                        title: "isitish birligi Fan Motor-48 Vt (Helal)",
                    },
                    ru: {
                        title: "Двигатель вентилятора отопительного агрегата-48 Вт (Helal)",
                    },
                    en: {
                        title: "Heating Unit Fan Motor-48W (Helal)",
                        specifications: {
                            Power: "48 W",
                        },
                    },
                },
                {
                    id: 20,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                    // ----
                    uz: {
                        title: "isitish birligi Fan Motor-39 Vt (Helal)",
                    },
                    ru: {
                        title: "Двигатель вентилятора отопительного агрегата-39 Вт (Helal)",
                    },
                    en: {
                        title: "Heating Unit Fan Motor-39W (Helal)",
                        specifications: {
                            Power: "39 W",
                        },
                    },
                },

                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/30hp-ikki mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/30 л.с.-Двойной вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/30HP-Double Shaft",
                        specifications: {
                            Power: "1/30 HP",
                            Shaft: "Double-shaft",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/30hp-ikki mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/30 л.с.-двойной вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/30HP-Double Shaft",
                        specifications: {
                            Power: "1/30 HP",
                            Shaft: "Single-shaft",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/25hp-ikki mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/25 л.с.-Двойной вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/25HP-Double Shaft",
                        specifications: {
                            Power: "1/25 HP",
                            Shaft: "Double-shaft",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/25hp-yagona mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/25 л.с.-Одинарный вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/25HP-Single Shaft",
                        specifications: {
                            Power: "1/25 HP",
                            Shaft: "Single-shaft",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/20hp-ikki mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/20 л.с.-Двойной вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/20HP-Double Shaft",
                        specifications: {
                            Power: "1/20 HP",
                            Shaft: "Double-shaft",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/20hp-yagona mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/20 л.с.-одинарный вал",
                    },
                    en: {
                        title: "Fan Coil Motor-1/20HP-Single Shaft",
                        specifications: {
                            Power: "1/20 HP",
                            Shaft: "Single-shaft",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/16hp-ikki mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/16 л.с.-с двойным валом",
                    },
                    en: {
                        title: "Fan Coil Motor-1/16HP-Double Shaft",
                        specifications: {
                            Power: "1/16 kW",
                            Shaft: "Double-shaft",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                    // ----
                    uz: {
                        title: "Fan halqa Motor-1/16hp-yagona mil",
                    },
                    ru: {
                        title: "Двигатель фанкойла-1/16 л.с.-с одним валом",
                    },
                    en: {
                        title: "Fan Coil Motor-1/16HP-Single Shaft",
                        specifications: {
                            Power: "1/16 kW",
                            Shaft: "Single-shaft",
                        },
                    },
                },

                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8109.png",
                    // ----
                    uz: {
                        title: "sanoat chiqarish Fan motorlar",
                    },
                    ru: {
                        title: "Двигатели промышленных вытяжных вентиляторов",
                    },
                    en: {
                        title: "Industrial Exhaust Fan Motors",
                        specifications: {
                            Power: "165 W",
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
                                                class="text-[#032055] sm:text-[18px] pl-[10px]">{{ $t("Size")
                                                }}</th>
                                            <th v-if="item.en.specifications.Speed"
                                                class="text-[#032055] sm:text-[18px] pl-[10px]">{{ $t("Speed")
                                                }}</th>
                                            <th v-if="item.en.specifications.pole"
                                                class="text-[#032055] sm:text-[18px]">{{
                                                    $t("Pole") }}</th>
                                            <th v-if="item.en.specifications.Power"
                                                class="text-[#032055] sm:text-[18px]">{{
                                                    $t("Power") }}</th>
                                            <th v-if="item.en.specifications.type"
                                                class="text-[#032055] sm:text-[18px]">{{
                                                    $t("Type") }}</th>
                                            <th v-if="item.en.specifications.Impeller"
                                                class="text-[#032055] sm:text-[18px]">{{
                                                    $t("Impeller") }}</th>
                                            <th v-if="item.en.specifications.Phase"
                                                class="text-[#032055] sm:text-[18px]">{{
                                                    $t("Phase") }}</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- row 1 -->
                                        <tr>
                                            <td class=" pl-[10px]" v-if="item.en.specifications.size">{{
                                                item.en.specifications.size }}</td>
                                                
                                            <td class="" v-if="item.en.specifications.pole">{{
                                                item.en.specifications.pole }}</td>
                                            <td class="" v-if="item.en.specifications.Speed">{{
                                                item.en.specifications.Speed }}</td>
                                            <td class="" v-if="item.en.specifications.Power">{{
                                                item.en.specifications.Power }}</td>
                                            <td class="" v-if="item.en.specifications.type">{{
                                                item.en.specifications.type }}</td>
                                            <td class="" v-if="item.en.specifications.Impeller">{{
                                                item.en.specifications.Impeller }}</td>
                                            <td class="" v-if="item.en.specifications.Phase">{{
                                                item.en.specifications.Phase }}</td>
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
