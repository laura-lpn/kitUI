<template>
  <footer
  class="bg-white
  w-full py-4 px-28 flex flex-col justify-center gap-4 md:flex-row md:gap-16 items-center mt-auto
  ">
    <RouterLink :to="{name : 'home'}" class="hover:animate-pulse">
      <img src="@/assets/logo.svg" alt="logo KitUI" class="h-12">
    </RouterLink>
    <p class="text-medium text-black">© Copyright KitUI 2024</p>
    <RouterLink :to="{name : 'legals'}" class="text-pink">Mentions légales</RouterLink>
  </footer>
</template>