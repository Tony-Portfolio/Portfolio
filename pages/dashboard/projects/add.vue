<script setup>

definePageMeta({
    middleware: 'auth'
})

const title = ref('');
const description = ref('');
const picture = ref();
const link = ref('');
const technology = ref('');
const form = ref('form');
const pictureText = ref('');
const { supabase } = useSupabase();
const insertDataImg = async () => {
    const selectedFile = picture.value.files[0];

    const { data, error } = await supabase
        .storage
        .from('data')
        .upload(selectedFile.name, selectedFile);

    if (error) {
        console.error('Error uploading file:', error);
        return;
    }

    console.log('File uploaded:', data);
}

const insertData = async () => {

    const { data, error } = await supabase
        .from('project')
        .insert([
            { title: title.value, description: description.value, picture: picture.value, link: link.value, technology: technology.value },
        ])
        .select()
    if (data) {
        insertDataImg();
        return navigateTo('/dashboard/projects')
    }
}
const handleFile = (file) => {
    picture.value = file.target;
    pictureText.value = file.target.files[0].name;
}
</script>
<template>
    <div class="flex lg:flex-row flex-col">
        <DashboardNavigation />
        <div class="bg-white p-8 rounded w-full">
            <NuxtLink to="/dashboard/projects" class="flex items-center gap-2 mb-4 cursor-pointer"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Go Back</NuxtLink>
            <h2 class="text-2xl font-semibold mb-4 text-black">Insert Project</h2>
            <form @submit.prevent="insertData" ref="form">
                <div class="mb-4 flex lg:flex-row flex-col">
                    <label class="block text-gray-700 font-bold mb-2 w-32 shrink-0" for="title">Title:</label>
                    <input class="w-full p-2 border rounded" type="text" id="title" v-model="title"
                        placeholder="Enter title" />
                </div>
                <div class="mb-4 flex lg:flex-row flex-col">
                    <label class="block text-gray-700 font-bold mb-2 w-32 shrink-0" for="description">Description:</label>
                    <textarea class="w-full p-2 border rounded" id="description" v-model="description"
                        placeholder="Enter description" rows="4"></textarea>
                </div>
                <div class="mb-4 flex lg:flex-row flex-col">
                    <label class="block text-gray-700 font-bold mb-2 w-32 shrink-0" for="picture">Picture:</label>
                    <input type="file" hidden name="picture" id="picture" @change="handleFile($event)" />
                    <div class="w-full flex items-center gap-2">
                        <label for="picture" class="shrink-0 text-sm bg-gray-300 rounded px-4 py-2">Choose File</label>
                        <input class="w-full p-2 border rounded" type="text" id="picture" v-model="pictureText"
                            placeholder="Pilih file gambar" readonly />
                    </div>
                </div>
                <div class="mb-4 flex lg:flex-row flex-col">
                    <label class="block text-gray-700 font-bold mb-2 w-32 shrink-0" for="link">Link:</label>
                    <input class="w-full p-2 border rounded" type="text" id="link" v-model="link"
                        placeholder="Enter link URL" />
                </div>
                <div class="mb-4 flex lg:flex-row flex-col">
                    <label class="block text-gray-700 font-bold mb-2 w-32 shrink-0" for="technology">Technology:</label>
                    <input class="w-full p-2 border rounded" type="text" id="technology" v-model="technology"
                        placeholder="Enter technology" />
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Insert
                </button>
            </form>
        </div>
    </div>
</template>