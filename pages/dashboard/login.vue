<script setup>
const { supabase } = useSupabase();
const email = ref('rakaoktoramadhan@gmail.com');
const password = ref('123');
const loginUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if (data.user) {
        console.log(data);
        return navigateTo('/dashboard');
    }
    else {
        alert("Error", error)
    }
}
</script>
<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-[400px]">
            <h2 class="text-2xl font-semibold mb-4 text-black" style="color:black;">Login</h2>
            <form @submit.prevent="loginUser">
                <input v-model="email" type="email" placeholder="Email" class="w-full p-2 mb-3 border rounded" />
                <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-3 border rounded" />
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
</template>