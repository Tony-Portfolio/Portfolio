<script setup lang="ts">
import { onMounted } from "vue";
const { enabled } = useTheme();
const { supabase, supabaseClient } = useSupabase();

console.log(supabase);
const dataProjects = ref();

const fetchData: any = async () => {

    const { data, error } = await supabase.from('project').select();
    const user = supabaseClient;

    if (error) {
        console.log("Something Went Wrong", error);
        return;
    }
    if (data) {
        console.log(data);
        dataProjects.value = data;
    }
}

const generateImg = (text: string) => {
    return `https://vnuqwzaoqxrmtfpumnhy.supabase.co/storage/v1/object/public/data/${text}`;
}

onMounted(() => {
    fetchData();
});
</script>
<template>
    <section id="project">
        <div class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col mb-8">
            <h2 class="text-2xl">Projects</h2>
            <p>I've done several projects in highscool</p>
        </div>
        <div class="">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div class="border-[1px] dark:border-slate-800 shadow rounded p-8 flex flex-col gap-4 dark:bg-[#5b5a96]/20 bg-white"
                    v-for="data in dataProjects">
                    <h3 class="text-xl font-bold">
                        <a :href="data.link" target="_blank" class="flex items-center gap-4">{{ data.title }}
                            <svg xmlns="http://www.w3.org/2000/svg" :fill="enabled ? 'white' : 'black'" height="20px"
                                viewBox="0 0 512 512">
                                <path
                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                            </svg></a>
                    </h3>
                    <p>{{ data.description }}
                    </p>
                    <div class="flex items-center gap-2">
                        <div class="" v-for="tech in data.technology.split(', ')">
                            <img :src="generateImg(tech)" alt="" class="w-[50px]">
                        </div>
                    </div>
                    <img :src="generateImg(data.picture)" alt="" class="w-full">
                </div>
            </div>
        </div>
        <div class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col mb-8 pt-28">
            <h2 class="text-xl">My skillset</h2>
        </div>
        <div class="">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="border-[1px] border-slate-300 dark:border-slate-500  p-4 rounded">
                    <h3>Front-End</h3>
                    <p class="leading-tight text-sm my-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, voluptas</p>
                    <ul class="flex items-center gap-4 flex-wrap">
                        <li><img src="/icon/html.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/css.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/javascript.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/bootstrap.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/tailwind.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/nuxt.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/typescript.png" class="w-[50px]" alt=""></li>
                    </ul>
                </div>
                <div class="border-[1px] border-slate-300 dark:border-slate-500  p-4 rounded">
                    <h3>Back-End</h3>
                    <p class="leading-tight text-sm my-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, voluptas</p>
                    <ul class="flex items-center gap-4">
                        <li><img src="/icon/php.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/laravel.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/nodejs.png" class="w-[50px]" alt=""></li>
                    </ul>
                </div>
                <div class="border-[1px] border-slate-300 dark:border-slate-500  p-4 rounded">
                    <h3>Database</h3>
                    <p class="leading-tight text-sm my-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, voluptas</p>
                    <ul class="flex items-center gap-4">
                        <li><img src="/icon/mysql.png" class="w-[50px]" alt=""></li>
                        <li><img src="/icon/sqlserver.png" class="w-[50px]" alt=""></li>
                    </ul>
                </div>
                <div class="border-[1px] border-slate-300 dark:border-slate-500  p-4 rounded">
                    <h3>Other programming language</h3>
                    <p class="leading-tight text-sm my-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, voluptas</p>
                    <ul class="flex items-center gap-4">
                        <li><img src="/icon/csharp.png" class="w-[50px]" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
