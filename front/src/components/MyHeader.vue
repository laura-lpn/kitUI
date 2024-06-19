<template>
  <header
  class="
  bg-white
  py-3 lg:px-20
  w-full h-auto
  flex justify-center items-center
  ">
    <RouterLink :to="{ name: 'home'}" title="Accueil" class="hover:animate-pulse z-[100]">
      <img src="@/assets/logo.svg" alt="logo KitUI" class="h-16">
    </RouterLink>
  </header>
</template>