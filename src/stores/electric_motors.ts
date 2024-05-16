import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useElectricMotors = defineStore("electric", () => {
  const electric_motors = [
    {
      id: 1,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_5010.jpg",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-5,5 кВт-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-6 qutblar-5,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "5.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 2,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_5010.jpg",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-4 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-4 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "4 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 3,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.jpg",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 250-4 полюса-55 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 250-4 tirgaklar-55 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 250-4 Poles-55KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "250",
          pole: "4",
          Power: "55 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 4,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 250-2 полюса-55 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 250-2 tirgaklar-55 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 250-2 Poles-55KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "250",
          pole: "2",
          Power: "55 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 5,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 225-4 полюса-45 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 225-4 tirgaklar-45 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 225-4 Poles-45KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "225",
          pole: "4",
          Power: "45 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 6,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 225-2 полюса-45 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 225-2 tirgaklar-45 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 225-2 Poles-45KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "225",
          pole: "2",
          Power: "45 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 7,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 225-2 полюса-45 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 225-2 tirgaklar-45 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 225-2 Poles-45KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "200",
          pole: "4",
          Power: "30 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 8,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 200-2 полюса-37 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 200-2 tirgaklar-37 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 200-2 Poles-37KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "200",
          pole: "2",
          Power: "37 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 9,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 200-2 полюса-30 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 200-2 tirgaklar-30 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 200-2 Poles-30KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "200",
          pole: "2",
          Power: "30 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 10,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 180-4 полюса-22 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 180-4 tirgaklar-22 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 180-4 Poles-22KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "180",
          pole: "4",
          Power: "22 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 11,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 180-4 полюса-18,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 180-4 qutb-18,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 180-4 Poles-18.5KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "180",
          pole: "4",
          Power: "18.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 12,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 180-2 полюса-22 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 180-2 tirgaklar-22 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 180-2 Poles-22KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "226",
          pole: "4",
          Power: "45 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 17,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 180-2 полюса-22 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 180-2 tirgaklar-22 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 180-2 Poles-22KW-IMB35",
        appearance: {
          FrameMaterial: "Cast Iron",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "7.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 13,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-4 qutblar-5,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 14,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 15,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-5,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 16,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Три Фазный двигатель-рама 160-6 полюсов-11 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-6 tirgaklar-11 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "11 kW",
          type: "IMB35",
        },
      },
    },

    {
      id: 18,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-6 полюсов-11 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-6 tirgaklar-11 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "11 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 19,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-6 полюсов-11 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-6 tirgaklar-11 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "11 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 20,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-6 полюсов-7,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-6 qutb-7,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "7.4 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 21,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-6 полюсов-7,5 кВт-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 160-6 qutblar-7,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "7.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 22,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-6 полюсов-7,5КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-6 qutb-7,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "6",
          Power: "7.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 23,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-15 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-15 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "15 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 24,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-15 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-15 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "15 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 25,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-15 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-15 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "15 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 26,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title:
          "Трехфазный двигатель-рама Двигатель-рама 160-4 полюса-11 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-11 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "11 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 27,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-11 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-11 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "11 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 28,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-11 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-11 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "11 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 29,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-4 полюса-11 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-4 tirgaklar-11 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "11 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 30,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-18,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 qutb-18,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "4",
          Power: "18.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 31,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-18,5КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 qutb-18,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "18.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 32,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-18,5 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 qutb-18,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "18.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 33,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-15 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-15 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "15 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 34,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-15 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-15 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "15 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 35,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title:
          "Трехфазный двигатель-рама Двигатель-рама 160-2 полюса-15 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-15 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "15 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 36,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-11 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-11 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "11 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 37,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-11 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-11 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "11 kW",
          type: "IMB5",
        },
      },
    },

    {
      id: 38,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 160-2 полюса-11 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 160-2 tirgaklar-11 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "160",
          pole: "2",
          Power: "11 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 39,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-5,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-6 qutblar-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 40,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-5,5КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-6 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 41,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-4 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-4 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "4 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 42,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-4 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-4 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "4 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 43,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-4 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-4 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "4 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 44,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 132-6 полюсов-3 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-3 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "3 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 45,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 132-6 полюсов-3 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-3 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "3 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 46,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-6 полюсов-3 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-6 tirgaklar-3 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "6",
          Power: "3 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 47,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-7,5 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-4 qutblar-7,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-7.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "7.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 48,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-7,5 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-4 qutb-7,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-7.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "7.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 49,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 132-4 qutb-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 50,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 132-4 qutb-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 51,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-4 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 52,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5 кВт-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-4 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 53,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-4 полюса-5,5кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-4 qutb-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 54,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "4",
          Power: "7.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 55,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5КВТ-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 56,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 57,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 58,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 Полюсов-7,5КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-7,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 59,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-7,5КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-2 qutblar-7,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 60,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 61,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5кВт-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 62,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-2 qutblar-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 63,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-2 qutblar-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "7.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 64,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5КВТ-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 65,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 132-2 qutblar-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 66,
      img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 132-2 qutblar-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "132",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 67,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-6 Полюсов-2,2КВТ-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-6 qutblar-2,2 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "6",
          Power: "2.2 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 68,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-6 полюсов-2,2КВТ-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-6 qutblar-2,2 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "6",
          Power: "2.2 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 69,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-6 полюсов-2,2КВТ-IMB14",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-6 qutblar-2,2 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "6",
          Power: "2.2 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 70,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-6 полюсов-2,2КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-6 qutblar-2,2 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "6",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 71,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-6 полюсов-2,2кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 112-6 qutblar-2,2 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "6",
          Power: "2.2 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 72,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 qutb-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 73,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 qutb-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 74,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5 кВт-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-4 qutblar-5,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB34",
        },
      },
    },

    {
      id: 75,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5 кВт-IMB14",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-4 qutblar-5,5 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB14",
        },
      },
    },
    // line 1
    {
      id: 76,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-4 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },

    {
      id: 77,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-5,5 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 qutb-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "5.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 78,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 112-4 полюса-2,2 кВт-IMB35",
      },
      uz: {
        title: "yagona fazali motorli ramka 112-4 qutb-2,2 kVt-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 79,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 112-4 Полюсов-2,2КВТ-IMB14",
      },
      uz: {
        title: "yagona fazali motorli ramka 112-4 qutblar-2,2 kVt-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB14",
        },
      },
    },

    {
      id: 80,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 112-4 полюса-2,2КВТ-IMB5",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 112-4 ustunlari-2.2 kVt-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 81,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 112-4 полюса-2,2КВТ-IMB3",
      },
      uz: {
        title: "yagona fazali motorli ramka 112-4 qutb-2,2 kVt-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB3",
        },
      },
    },

    {
      id: 82,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 83,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB34",
        },
      },
    },

    {
      id: 84,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 85,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 86,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 87,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-4 полюса-4 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 112-4 tirgaklar-4 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "4",
          Power: "4 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 88,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-5,5КВТ-IMB35",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-2 qutblar-5,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 89,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-5,5 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-2 qutblar-5,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 90,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-5,5 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali Motor-ramka 112-2 qutblar-5,5 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 91,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-5,5 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 qutblar-5,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 92,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Три Фазный двигатель-рама 112-2 полюса-5,5кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 qutblar-5,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "5.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 93,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-4 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 tirgaklar-4 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "4 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 94,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-4 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 tirgaklar-4 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "4 kW",
          type: "IMB34",
        },
      },
    },

    {
      id: 95,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-4 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 tirgaklar-4 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "4 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 96,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-4 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 tirgaklar-4 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "4 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 97,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 112-2 полюса-4 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 112-2 tirgaklar-4 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "112",
          pole: "2",
          Power: "4 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 98,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 100-4 полюса-2,2КВТ-IMB35",
      },
      uz: {
        title: "yagona fazali motorli ramka 100-4 qutb-2,2 kVt-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 99,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB14",
      },
      uz: {
        title: "yagona fazali motorli ramka 100-4 qutb-2,2 kVt-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 100,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 100-4 полюса-2,2 кВт-IMB5",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 100-4 ustunlari-2.2 kVt-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },

    {
      id: 101,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      ru: {
        title:
          "Однофазный двигатель-рама Двигатель-рама 100-4 полюса-2,2кВт-IMB3",
      },
      uz: {
        title: "yagona fazali motorli ramka 100-4 qutb-2,2 kVt-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 102,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-3 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 103,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-3 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 104,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-3 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 105,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 кВт-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutblar-3 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 106,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-3 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 107,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-3 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 108,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB35",
        },
      },
    },

    {
      id: 109,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-2,2 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 110,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 100-4 полюса-2,2КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 111,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 100-4 полюса-2,2 кВт-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 112,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 113,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 100-4 qutb-2,2 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "2.2 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 114,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-2 полюса-3 кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 100-2 qutb-3 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "4",
          Power: "3 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 115,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 100-2 qutb-3 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "2",
          Power: "3 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 116,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 100-2 qutb-3 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "2",
          Power: "3 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 117,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali motorli ramka 100-2 qutb-3 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "2",
          Power: "3 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 118,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 100-2 полюса-3 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 100-2 qutb-3 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "100",
          pole: "2",
          Power: "3 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 119,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 90-4 полюса-1,5кВт-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 120,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-Рама 90-4 полюса-1,5 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 121,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,5 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,5 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB14",
        },
      },
    },

    {
      id: 122,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,5 КВТ-IMB5",
      },
      uz: {
        title: "uch bosqich avtomobil-ramka 90-4 ustunlari-1,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 123,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,5 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,5 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 124,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 Полюсов-1,5КВТ-IMB35",
      },
      uz: {
        title: "yagona fazali motorli ramka 90-4 qutb-1,5 kVt-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 125,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,5КВТ-IMB14",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-4 ustunlari-1,5 kVt-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 126,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,5КВТ-IMB5",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-4 ustunlari-1,5 kVt-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 127,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,5КВТ-IMB3",
      },
      uz: {
        title: "yagona fazali motorli ramka 90-4 qutb-1,5 kVt-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 128,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,1КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,1 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 129,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,1 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,1 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 130,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,1КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,1 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 131,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,1 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 90-4 qutblar-1,1 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 132,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-4 полюса-1,1 кВт-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 90-4 qutb-1,1 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB3",
        },
      },
    },

    {
      id: 133,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 Полюсов-1,1КВТ-IMB35",
      },
      uz: {
        title: "yagona fazali motorli ramka 90-4 qutb-1,1 kVt-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 134,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB14",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-4 ustunlari-1.1 kVt-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 135,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB5",
      },
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-4 ustunlari-1.1 kVt-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 136,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      ru: {
        title: "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB3",
      },
      uz: {
        title: "yagona fazali motorli ramka 90-4 qutb-1,1 kVt-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "4",
          Power: "1.1 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 137,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-2,2КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-2,2 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "2.2 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 138,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-2,2 кВт-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-2,2 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "2.2 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 139,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-2,2КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-2,2 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "2.2 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 140,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-2,2 КВТ-IMB5",
      },
      uz: {
        title: "uch fazali Motor-ramka 90-2 qutblar-2,2 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "2.2 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 141,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-2,2 КВТ-IMB3",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-2,2 kVt-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "2.2 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 142,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 Полюса-1,5КВТ-IMB35",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-1,5 kVt-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB35",
        },
      },
    },

    {
      id: 143,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-1,5КВТ-IMB34",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-1,5 kVt-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 144,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-1,5 КВТ-IMB14",
      },
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-1,5 kVt-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 145,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-1,5КВТ-IMB5",
      },
      uz: {
        title: "uch bosqich avtomobil-ramka 90-2 ustunlari-1,5 kVt-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB5",
        },
      },
    },
    // line 2
    {
      id: 146,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 90-2 qutb-1,5 kVt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 90-2 полюса-1,5 КВТ-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 147,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-2 ustunlari-1,5 kVt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 90-2 полюса-1,5 КВТ-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 148,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-2 ustunlari-1,5 kVt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 90-2 полюса-1,5 кВт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 149,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 90-2 ustunlari-1,5 kVt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 90-2 Полюсов-1,5КВТ-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 150,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 90-2 qutb-1,5 kVt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 90-2 полюса-1,5КВТ-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "90",
          pole: "2",
          Power: "1.5 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 151,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-550 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 152,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-550 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "550 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 153,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 154,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-550 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 155,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-550 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 156,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 157,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 158,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 159,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 160,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 161,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 162,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },

    {
      id: 163,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 164,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-6 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 165,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 qutb-750 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "750 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 166,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "6",
          Power: "750 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 167,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 168,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 169,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 qutb-750 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 170,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 qutb-750 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 171,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 172,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 173,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-750 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "750 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 174,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 qutb-550 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 175,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 176,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 177,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 178,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-4 qutb-550 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 179,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 qutb-550 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 180,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 181,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 182,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-4 tirgaklar-550 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "4",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 183,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-750 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 184,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-750 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 185,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 tirgaklar-750 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 186,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-750 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 187,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-750 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 188,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-2 qutb-750 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 189,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-2 tirgaklar-750 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 190,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-2 tirgaklar-750 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 191,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-2 qutb-750 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "750 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 192,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-1,1 kVt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-1,1 КВТ-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 193,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-1,1 kVt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-1,1 кВт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB34",
        },
      },
    },
    {
      id: 194,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-1,1 kVt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-1,1КВТ-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 195,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali Motor-ramka 80-2 qutblar-1,1 kVt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-1,1КВТ-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 196,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 80-2 qutb-1,1 kVt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 80-2 полюса-1,1 КВТ-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 197,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 80-2 ustunlari-1,1 kVt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-1,1КВТ-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB35",
        },
      },
    },
    {
      id: 198,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 80-2 ustunlari-1.1 kVt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-1,1КВТ-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB14",
        },
      },
    },
    {
      id: 199,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona bosqich avtomobil-ramka 80-2 ustunlari-1.1 kVt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-1,1 кВт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB5",
        },
      },
    },
    {
      id: 200,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 80-2 qutb-1,1 kVt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 80-2 полюса-1,1кВт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "80",
          pole: "2",
          Power: "1.1 kW",
          type: "IMB3",
        },
      },
    },
    {
      id: 201,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-550 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 203,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-550 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "550 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 202,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 203,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-550 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 204,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-550 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 205,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-500 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "500 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 206,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-500 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-Рама 71-4 полюса-500 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "500 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 207,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-500 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-Рама 71-4 полюса-500 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "500 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 208,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-500 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "500 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 209,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 210,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 211,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 212,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 213,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 214,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 215,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 216,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 217,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-4 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 218,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-250 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "250 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 219,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-250 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "250 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 220,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-250 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "250 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 221,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-4 tirgaklar-250 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "4",
          Power: "250 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 222,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-750 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "750 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 223,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-750 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "750 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 224,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-750 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "750 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 225,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-750 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "750 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 226,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-750 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "750 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 227,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 228,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 229,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 230,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 231,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 232,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 233,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 234,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 235,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-550 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "550 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 236,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 237,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 238,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 239,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 240,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 241,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 242,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 243,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 244,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 245,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 246,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 247,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 248,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 249,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "yagona fazali motorli ramka 71-2 tirgaklar-370 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "71",
          pole: "2",
          Power: "370 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 250,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 251,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 252,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 253,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 254,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 255,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 256,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 257,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "bir fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 258,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-4 tirgaklar-180 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "180 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 259,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 260,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 261,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 262,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 263,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 264,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 265,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 266,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "bir fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 267,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-2.png",
      // ----
      uz: {
        title: "bir fazali motorli ramka 63-4 tirgaklar-120 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "4",
          Power: "120 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 268,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 269,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 270,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 271,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 272,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 273,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 274,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB14",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB14",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 275,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
      // ----
      uz: {
        title: "bir fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB5",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB5",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 276,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
      // ----
      uz: {
        title: "bir fazali motorli ramka 63-2 tirgaklar-250 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "250 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 277,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB35",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB35",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 278,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB34",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB34",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB34",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB34",
        },
      },
    },
    {
      id: 279,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB14",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB14",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB14",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB14",
        },
      },
    },
    {
      id: 280,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB5",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB5",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB5",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB5",
        },
      },
    },
    {
      id: 281,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
      // ----
      uz: {
        title: "uch fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB3",
      },
      ru: {
        title: "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB3",
      },
      en: {
        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB3",
        },
      },
    },
    {
      id: 282,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB35",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-180 Вт-IMB35",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-180W-IMB35",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB35",
        },
      },
    },
    {
      id: 283,
      img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
      // ----
      uz: {
        title: "bitta fazali motorli ramka 63-2 tirgaklar-180 Vt-IMB3",
      },
      ru: {
        title: "Однофазный двигатель-рама 63-2 полюса-180 Вт-IMB3",
      },
      en: {
        title: "Single Phase Motor-Frame 63-2 Poles-180W-IMB3",
        appearance: {
          FrameMaterial: "Aluminium",
        },
        specifications: {
          size: "63",
          pole: "2",
          Power: "180 W",
          type: "IMB3",
        },
      },
    },
  ];

  return { electric_motors };
});
