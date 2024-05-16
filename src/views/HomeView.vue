<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {useLangStore} from "../stores/lang"
const productCategory = ref([
  {
    id: 1,
    route: "/industrial-electric-motors",
    en: "Industrial Electric Motors",
    ru: "Промышленные электродвигатели",
    uz: "Sanoat elektr motorlari",
    subtitle_en: "INDUSTRIAL ELECTRIC MOTORS",
    subtitle_ru: "ПРОМЫШЛЕННЫЕ ЭЛЕКТРОДВИГАТЕЛИ",
    subtitle_uz: "SANOAT ELEKTR MOTORLARI",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C-%D9%85%D8%B4%D8%A7%D8%A8%D9%87-%D8%A8%D8%A7-%D9%86%D9%85%D9%88%D9%86%D9%87-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C.svg",
    // ----
  },
  {
    id: 6,
    route: "/elevator-motors",
    en: "Elevator Motors",
    subtitle_en: "",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/asansor.svg",
    ru: "Лифтовые двигатели",
    subtitle_ru: "",
    uz: "Lift motorlari",
    subtitle_uz: "",
  },
  {
    id: 7,
    route: "/heating-unit-motors",
    en: "Heating Unit Motors",
    subtitle_en: "HEATING PACKAGE",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
    ru: "Двигатели нагревательного агрегата",
    subtitle_ru: "ОТОПЛИТЕЛЬНЫЙ ПАКЕТ",
    uz: "Isitish bloklari motorlari",
    subtitle_uz: "ISITISH PAKETI",
  },

  {
    id: 3,
    route: "/water-pumps",
    en: "Water Pumps",
    subtitle_en: "Water Pump",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%BE%D9%85%D9%BE%D8%A2%D8%A8-2.svg",
    ru: "Водяные насосы",
    subtitle_ru: "Водяной насос",
    uz: "Suv nasosi",
    subtitle_uz: "Suv nasosi",
  },
  {
    id: 5,
    route: "/ventilation-motors",
    en: "Ventilation Motors",
    subtitle_en: "VENTILATION MOTORS",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%AA%D9%87%D9%88%DB%8C%D9%87.svg",
    ru: "Вентиляционные двигатели",
    subtitle_ru: "ВЕНТИЛЯЦИОННЫЕ МОТОРЫ",
    uz: "Ventilyatsiya motorlar",
    subtitle_uz: "Ventilyatsiya motorlar",
  },
  {
    id: 4,
    route: "/burder-motors",
    en: "Burner Motors",
    subtitle_en: "Burner Motors",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D8%B4%D8%B9%D9%84.svg",
    ru: "Горелочные двигатели",
    subtitle_ru: "Горелочные двигатели",
    uz: "Olovli dvigatellar",
    subtitle_uz: "Olovli dvigatellar",
  },

  {
    id: 2,
    route: "/motors-and-water-pumps-for-desert-cooler",
    en: "Motors And Water Pumps For Desert Cooler",
    subtitle_en: "MOTORS AND WATER PUMPS FOR DESERT COOLER",
    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%DA%A9%D9%88%D9%84%D8%B1.svg",
    ru: "Двигатели и водяные насосы для охладителя пустыни",
    subtitle_ru: "МОТОРЫ И ВОДЯНЫЕ НАСОСЫ ДЛЯ ХОЛОДИЛЬНИКА ПУСТЫНИ",
    uz: "Cho'l sovutgichi uchun motorlar va suv nasoslari",
    subtitle_uz: "MOTORLAR VA SUV NASOSLARI CHO'L SOVUTGANLARI UCHUN",
  },
]);
onMounted(() => {
  setTimeout(() => useLangStore().once = true, 1000);
})

</script>

<template>
  <div>
    <div class="header bg-white py-[10px] flex justify-center">
      <img class="h-[50px]" src="https://parsmotor.uz/assets/logo-sLLg3iYW.png" alt="image">
    </div>
    <main class="h-[100vh] w-[100%] p-[20px]">
      <div class="pb-[50px] sm:max-w-[1200px] sm:mt-[50px] sm:mx-auto sm:flex sm:flex-wrap sm:gap-[20px]">
        <div @click="$router.push(item.route)" :style="`transition-delay: .${productCategory.indexOf(item)}s`"
          :class="{ sl: useLangStore().once }" v-for="item of productCategory" :key="item.id"
          class="sq rounded-[15px] h-[100px] w-[100%] mb-[10px] p-[20px] flex items-center gap-[10px] font-[1000] sm:w-[30%] sm:h-[150px]">
          <div class="bg-[#E5E8ED] h-[60px] w-[60px] sm:h-[90px] sm:w-[90px] rounded-[50%]">
            <img class="h-[100%] w-[100%] object-cover" :src="item.img" alt="">
          </div>
          <span class="text-[#184271] sm:text-[20px] flex-1">{{ item[$t('lang')] }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.sl {
  transform: translateX(0px) !important;
}

.sq {
  transition-timing-function: linear;
  transform: translateX(-100%);
  transition-duration: .3s;
  border: 1px solid rgba(0, 0, 0, 0.291);
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.417);
}

.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.291);
}

main {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center center;
}

@media screen and (min-width: 640px) {
  main {
    background-image: url('https://electrogenco.com/en/wp-content/uploads/2024/03/Home.jpg');
  }

  .sq {
    transform: translateX(0%) !important;
  }
}
</style>
