<template>
  <div class="bg-white rounded-[32px] my-12 w-4/5 sm:w-3/4 mx-auto py-8 px-6 sm:px-16 md:px-20 flex flex-col justify-center items-center">
    <h1 class="text-3xl text-pink font-semibold mb-8">Bienvenue sur KitUI</h1>
    <div class="w-4/5 mx-auto flex flex-col items-center lg:w-2/3">
      <p class="text-lg text-center">KitUI est un outil de génération de kit d'interface utilisateur. Il vous permet de générer un kit d'interface utilisateur personnalisé en fonction de vos besoins.</p>

      <my-button @click="$router.push({ name: 'create' })" class="mt-8" :value="'Générer mon kit'" :id="'create'"/>
    </div>
    </div>
</template>
