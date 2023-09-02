<script setup lang="ts">
// definePageMeta({
//   middleware: [
//     'auth',
//   ],
// });
</script>


<template>
  <NuxtPage />
</template>

<style>
*{
  margin:0;
  padding:0;
}
html {
  scroll-behavior: smooth;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply dark:text-white font-bold;
}

p {
  @apply dark:text-slate-300;
}

section,
nav>div {
  @apply md:mx-32 mx-4 pb-12 pt-[70px];
}

nav>div {
  @apply pt-0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>