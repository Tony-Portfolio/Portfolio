<script setup lang="ts">
const { supabase, supabaseClient } = useSupabase();
const menuVisible = ref(false);

const logoutUser = async () => {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
    })
    const { error } = await supabase.auth.signOut();
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
    })
    return navigateTo("/");
}
</script>
<template>
    <nav class="sticky top-0 left-0 w-full m-0 p-0 block lg:hidden">
        <div class="bg-slate-900 flex items-center justify-between m-0 p-4 border-b border-slate-700">
            <h2 class="text-white">Dashboard</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 512 512"
                @click="menuVisible = !menuVisible;" class="cursor-pointer">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </div>
        <div class="m-0 bg-slate-900 text-white p-0 shadow-md"
            :style="menuVisible ? { maxHeight: '200px', overflow: 'hidden', transition: 'max-height 0.8s' } : { maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.6s' }">
            <ul>
                <li class="border-b p-3 border-slate-700">
                    <NuxtLink to="/">Main Page</NuxtLink>
                </li>
                <li class="border-b p-3 border-slate-700">
                    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </li>
                <li class="border-b p-3 border-slate-700">
                    <NuxtLink to="/dashboard/projects">Projects</NuxtLink>
                </li>
                <li class="border-b p-3 border-slate-700 flex items-center gap-2" @click="logoutUser">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </nav>
    <nav class="bg-slate-900 text-white w-64 shrink-0 h-screen sticky top-0 left-0 shadow-lg lg:block hidden">
        <div class="flex items-center justify-center h-16 m-0 p-0">
            <span class="text-xl font-semibold">Dashboard</span>
        </div>
        <ul class="flex flex-col gap-2">
            <li class="">
                <NuxtLink to="/dashboard"
                    class="flex items-center py-2 px-6 text-gray-300 hover:bg-slate-800/90 hover:text-white">
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                    Dashboard Home
                </NuxtLink>
            </li>
            <li class="">
                <NuxtLink to="/dashboard/projects"
                    class="flex items-center py-2 px-6 text-gray-300 hover:bg-slate-800/90 hover:text-white">
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                        </path>
                    </svg>
                    Analytics
                </NuxtLink>
            </li>
        </ul>
        <div class="flex items-center gap-2 w-full m-0 bottom-[10px] absolute p-4 cursor-pointer text-sm"
            @click="logoutUser">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <span>Logout</span>
        </div>
    </nav>
</template>