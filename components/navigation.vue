<script setup lang="ts">
useHead({
    script: [{
        children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`}]
})

const { enabled, toggleTheme } = useTheme();
const responsiveNavigationHeight = ref(0);
const expandNavigation = () => {
    const divElement = responsiveNavigationHeight.value;
    console.log(divElement.style.height);
    if(divElement.style.height == "0px") divElement.style.height = `${divElement.scrollHeight}px`;
    else divElement.style.height = "0px";
}
</script>
<template>
    <nav
        class="fixed top-0 left-0 w-full border-b-[1px] border-[rgba(0,0,0,0.1)] dark:border-slate-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-20">
        <div class="flex items-center justify-between py-4 relative">
            <div class="">
                <h2 class="text-2xl dark:text-white">Raka</h2>
            </div>
            <ul class="hidden sm:flex gap-4 dark:text-white">
                <li class="cursor-pointer"><a href="#about">About</a></li>
                <li class="cursor-pointer"><a href="#project">Project</a></li>
                <li class="cursor-pointer"><a href="#certificate">Gallery</a></li>
                <li class="cursor-pointer"><a href="#contact">Contact</a></li>
                <!-- <li class="cursor-pointer"><NuxtLink href="/dashboard">Dashboard</NuxtLink></li> -->
                <li @click="toggleTheme" class="flex items-center w-[20px] cursor-pointer">
                    <svg v-if="!enabled" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                    </svg>
                </li>
            </ul>
            <div class="flex sm:hidden items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'text-white': enabled, 'text-black': !enabled }"
                    @click="expandNavigation" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                <li @click="toggleTheme" class="flex items-center w-[20px] cursor-pointer">
                    <svg v-if="!enabled" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                    </svg>
                </li>
            </div>
        </div>
        <div class="sm:hidden p-0 mx-0 h-0 overflow-hidden" ref="responsiveNavigationHeight" style="transition: 0.3s;">
            <ul class="flex flex-col dark:text-white p-4">
                <a class="  " href="#about" @click="expandNavigation">
                    <li class="cursor-pointer border-b border-slate-300 dark:border-slate-600 w-full p-2">About</li>
                </a>
                <a class="  " href="#project" @click="expandNavigation">
                    <li class="cursor-pointer border-b border-slate-300 dark:border-slate-600 w-full p-2">Project</li>
                </a>
                <a class="  " href="#certificate" @click="expandNavigation">
                    <li class="cursor-pointer border-b border-slate-300 dark:border-slate-600 w-full p-2">Gallery</li>
                </a>
                <a class="  " href="#contact" @click="expandNavigation">
                    <li class="cursor-pointer border-b border-slate-300 dark:border-slate-600 w-full p-2">Contact</li>
                </a>
            </ul>
    </div>
</nav></template>