<script setup>
const mouseBlob = ref('mouseBlob');
window.onmousemove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouseBlob.value.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
    }, { duration: 3000, fill: "forwards" })
    console.log("Mouse On : ", mouseX, mouseY)
}
</script>
<template>
    <div class="">
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-white dark:to-sky-400 mouseBlob"
            ref="mouseBlob"></div>
            <div class="" id="blur"></div>
    </div>
</template>
<style>
.mouseBlob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.8;
  z-index:0;
}

#blur {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 0;
  backdrop-filter: blur(12vmax);
}

@keyframes rotate {
    from {
        rotate: 0deg;
    }

    50% {
        scale: 1 1.5;
    }

    to {
        rotate: 360deg;
    }
}
</style>