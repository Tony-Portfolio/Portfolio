<script setup lang="ts">

definePageMeta({
    middleware: 'auth'
})

const { supabase, supabaseClient } = useSupabase();

console.log(supabase);
const dataProjects = ref();

const fetchData = async () => {

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
    return `https://vnuqwzaoqxrmtfpumnhy.supabase.co/storage/v1/object/public/data/${text}.png`;
}

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

onMounted(() => {
    fetchData();
})
</script>
<template>
    <div class="flex">
        <DashboardNavigation/>
    </div>
</template>