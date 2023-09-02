<script setup>

definePageMeta({
    middleware: 'auth'
})

const { supabase, supabaseClient } = useSupabase();

const title = ref('');
const description = ref('');
const picture = ref('');
const link = ref('');
const technology = ref('');
const form = ref('form');
const route = useRoute();
const id = route.params.id;
console.log("ID : ", typeof id)
const fetchData = async () => {

    const { data, error } = await supabase
        .from('project')
        .select()
        .eq('id', id)
        .single();

    if (error) {
        console.log("Something Went Wrong", error);
        return;
    }
    if (data) {
        console.log(data);
        title.value = data.title;
        description.value = data.description;
        picture.value = data.picture;
        link.value = data.link;
        technology.value = data.technology;
    }
}

const updateData = async () => {
    try {
        const { data, error } = await supabase
            .from('project')
            .update({
                title: title.value,
                description: description.value,
                picture: picture.value,
                link: link.value,
                technology: technology.value,
            })
            .eq('id', id).select();

        if (error) {
            console.error('Error updating data:', error.message);
            return;
        }

        console.log('Data updated:', data);
        return navigateTo('/dashboard/projects')
    } catch (error) {
        console.error('Error:', error.message);
    }
};


onMounted(() => {
    fetchData();
})

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
            <form @submit.prevent="updateData" ref="form">
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
                    <input class="w-full p-2 border rounded" type="text" id="picture" v-model="picture"
                        placeholder="Enter picture URL" />
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
                    Update
                </button>
            </form>
        </div>
    </div>
</template>