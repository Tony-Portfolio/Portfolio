<script setup lang="ts">

definePageMeta({
    middleware: 'auth'
})

const { supabase, supabaseClient } = useSupabase();

console.log(supabase);
const dataProjects = ref();
const deleteId = ref('');
const deletePopUp = ref(false);

const fetchData = async () => {

    const { data, error } = await supabase.from('project').select().order('id', { ascending: true });
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
const generateImgPicture = (text: string) => {
    const filename = text;
    const fileExtension = filename.split('.').pop();

    return `https://vnuqwzaoqxrmtfpumnhy.supabase.co/storage/v1/object/public/data/${text}`;
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

const deleteData = async () => {
    deletePopUp.value = false;
    console.log("WHAT ? ", deleteId.value)
    const { error } = await supabase
        .from('project')
        .delete()
        .eq('id', deleteId.value)
    fetchData();
}

onMounted(() => {
    fetchData();
})
</script>
<template>
    <div class="flex lg:flex-row flex-col">
        <DashboardNavigation />
        <div class="p-4">
            <NuxtLink to="projects/add" class="bg-blue-500 rounded p-2 px-4 text-white w-fit">Tambah Data +</NuxtLink>
            <div class="bg-gray-100 p-0 my-4 flex flex-col gap-4 w-full overflow-scroll">
                <table class="border-collapse w-full">
                    <thead class="bg-blue-500 text-white">
                        <tr>
                            <th class="p-4">No</th>
                            <th class="p-4">Title</th>
                            <!-- <th class="p-4">Description</th> -->
                            <th class="p-4">Picture</th>
                            <th class="p-4">Link</th>
                            <th class="p-4">Technology</th>
                            <th class="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white divide-x divide-gray-200" v-for="item in dataProjects" :key="item.id">
                            <td class="p-4">{{ item.id }}</td>
                            <td class="p-4">{{ item.title }}</td>
                            <!-- <td class="p-4">{{ item.description }}</td> -->
                            <td class="p-4"><img :src="generateImgPicture(item.picture)" class="w-full max-w-[400px]" alt=""></td>
                            <td class="p-4">
                                <a :href="item.link" target="_blank" class="text-blue-500 hover:underline">{{ item.link
                                }}</a>
                            </td>
                            <td class="p-4 flex gap-2">
                                <div class="w-8 h-8 mx-auto overflow-hidden" v-for="tech in item?.technology.split(', ')">
                                    <img :src="generateImg(tech)" alt="" class="w-full h-full">
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex gap-2">
                                    <NuxtLink :to="'/dashboard/projects/edit/' + item.id"
                                        class="rounded bg-green-500/80 p-2 text-white px-4">Edit</NuxtLink>
                                    <NuxtLink to="#delete" class="rounded bg-red-500/80 p-2 text-white px-4"
                                        @click="deletePopUp = true, deleteId = item.id">Hapus</NuxtLink>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="w-full h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center"
                v-show="deletePopUp">
                <div class="bg-white rounded p-8">
                    <p class="my-4 text-lg font-bold mb-12">Apakah anda yakin ingin menghapus item ini {{ deleteId }}?</p>
                    <div class="flex items-center gap-4">
                        <button class="bg-red-500 rounded text-white px-4 py-2 w-full"
                            @click="deletePopUp = false">Tidak</button>
                        <button class="bg-green-500 rounded text-white px-4 py-2 w-full" @click="deleteData">Ya</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>