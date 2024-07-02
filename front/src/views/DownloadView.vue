<template>
  <div class="bg-white rounded-[32px] my-12 w-4/5 sm:w-3/4 mx-auto py-8 px-6 sm:px-16 md:px-20 flex flex-col justify-center items-center">
    <h1 class="text-3xl text-pink font-semibold mb-8">Votre kit UI est prêt !</h1>
    <button @click="download" class="shadow-extern py-1 px-1 rounded-main focus:rounded-main group text-pink">
      <div class="group-active:shadow-intern group-hover:shadow-intern py-1 px-5 rounded-main flex items-center justify-center gap-4">
        Télécharger
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DownloadView',

  methods: {
    async download() {
      console.log('Download')
      try {
        const response = await fetch('http://localhost:3000/api/kitui/download');

        if (response.ok) {
          const blob = await response.blob()
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'template.css'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          console.log('Error')
        }
      }catch (error) {
        console.error(error)
      }
    }
  }
}
</script>