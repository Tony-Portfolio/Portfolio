<script setup lang="ts">
const { enabled } = useTheme();
</script>
<template>
    <section id="contact">
        <div class="border-b-[1px] dark:border-slate-500 p-2 flex justify-between mb-8">
            <h2 class="text-2xl">Contact Me</h2>
        </div>
        <div class="flex justify-between gap-8 p-2 md:flex-row flex-col">
            <div class="basis-6/12 text-gray-800 flex flex-col gap-4">
                <h3>My Story</h3>
                <p>Are you interested in collaborating or want to connect or chat? If so, hit the contact button down below or <a href="#" class="text-sky-500 underline">contact me via LinkedIn.</a></p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rakaoktoramadhan@gmail.com" target="_blank" class="bg-black p-5 py-3 rounded text-xl font-bold text-white dark:text-black dark:bg-white w-fit mt-12">Contact Me</a>
            </div>
            <div class="basis-6/12 flex flex-col gap-6">
                
            </div>
        </div>
    </section>
</template>