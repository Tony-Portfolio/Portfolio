<script setup>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const certificates = ref([
    { src: '/images/certificate-1.jpg' },
    { src: '/images/certificate-2.jpg' },
    { src: '/images/certificate-3.jpg' },
    { src: '/images/certificate-3.jpg' },
    { src: '/images/certificate-3.jpg' },
]);
const showOverlay = ref(false);
const activeCertificateIndex = ref(0);
const loadingBar = ref('loadingBar');

const openOverlay = (index) => {
    loadingBar.value.animate(
        { width: '70%' },
        {
            duration: 250,
            fill: 'forwards',
        }
    )

    showOverlay.value = true;
    activeCertificateIndex.value = index;
    document.body.style.overflowY = 'hidden';
};

const closeOverlay = () => {
    showOverlay.value = false;
    document.body.style.overflowY = 'auto';
    loadingBar.value.animate({
        width: "0px",
    }, { duration: 100, fill: "forwards" });
};

onMounted(() => {
    const swiper = new Swiper('.swiper', {
        // Swiper options here
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
        },
    });
});
</script>
<template>
    <section id="certificate">
        <div class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col mb-8">
            <h2 class="text-2xl">My Certificate</h2>
            <p>I've also got some certificate when i was in highschool</p>
        </div>
        <div :class="{ 'top-0': showOverlay }"
            class="fixed left-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-30"
            @click="closeOverlay">
            <div class="relative w-full h-full">
                <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-auto rounded max-w-[1000px] bg-white flex items-center justify-center"
                    ref="loadingBar">
                    <img :src="certificates[activeCertificateIndex].src" alt="" class="w-full h-full shadow-md block">
                </div>
            </div>
        </div>
        <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div class="swiper-wrapper">
                <div v-for="(certificate, index) in certificates" :key="index"
                    class="swiper-slide border-[1px] border-slate-300 p-4 rounded cursor-pointer" @click="openOverlay(index)">
                    <img :src="certificate.src" alt="" class="md:max-h-[200px] p-0 mx-auto">
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>