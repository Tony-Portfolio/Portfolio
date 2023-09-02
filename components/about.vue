<script setup lang="ts">
const { enabled } = useTheme();
</script>
<template>
    <section id="about">
        <div class="border-b-[1px] dark:border-slate-500 p-2 flex justify-between mb-8">
            <h2 class="text-2xl">About Me</h2>
            <a href="https://www.linkedin.com/in/raka-okto-ramadhan-a1578a270/" target="_blank" class="flex gap-4 items-center dark:text-white">View my Linkedin <svg xmlns="http://www.w3.org/2000/svg" :fill="enabled ? 'white' : 'black'"
                    height="1em" viewBox="0 0 448 512">
                    <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg></a>
        </div>
        <div class="flex justify-between gap-8 p-2 md:flex-row flex-col">
            <div class="basis-6/12 text-gray-800 flex flex-col gap-4">
                <h3>My Story</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam similique ad obcaecati molestiae,
                    quas eius, nostrum, ut quos quam voluptatem cum nobis cupiditate sunt ratione! Tempora voluptas
                    itaque vel cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam harum nulla, numquam aperiam
                    veritatis aliquid deleniti sit mollitia sed natus assumenda beatae iusto accusantium quasi ducimus
                    reprehenderit obcaecati! Illum!</p>
            </div>
            <div class="basis-6/12 flex flex-col gap-6">
                <h3>Timeline Experience</h3>
                <div class="flex flex-col gap-2">
                    <p class="text-slate-900 dark:text-gray-400 text-sm">July 2023 - Sep 2023</p>
                    <h4 class="text-xl">PT Juke Solusi Teknologi <span class="font-normal text-base">- Remote</span>
                    </h4>
                    <p class="text-slate-900">Frontend Developer (Nuxt) - Intern</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-slate-900 dark:text-gray-400 text-sm">January 2023 - March 2022</p>
                    <h4 class="text-xl">APKOMINDO <span class="font-normal text-base">- On site</span>
                    </h4>
                    <p class="text-slate-900">Junior App Programming (Arduino) - On the job training</p>
                </div>
            </div>
        </div>
    </section>
</template>