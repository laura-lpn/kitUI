<template>
  <div>
    <div class="progress-bar">
      <div :class="{ active: currentStep === 1 }">1</div>
      <div :class="{ active: currentStep === 2 }">2</div>
      <div :class="{ active: currentStep === 3 }">3</div>
      <div :class="{ active: currentStep === 4 }">4</div>
      <div :class="{ active: currentStep === 5 }">5</div>
    </div>
    <my-layout v-if="currentStep === 1" @next="nextStep"></my-layout>
    <my-colors  v-if="currentStep === 2" @previous="previousStep" @next="nextStep"></my-colors>
    <my-fonts  v-if="currentStep === 3" @previous="previousStep" @next="nextStep"></my-fonts>
    <my-components v-if="currentStep === 4" @previous="previousStep" @next="nextStep"></my-components>
    <my-cards  v-if="currentStep === 5" @previous="previousStep"></my-cards>
  </div>
</template>
<script>
import MyLayout from '../components/kitui/MyLayout.vue'
import MyColors from '../components/kitui/MyColors.vue'
import MyFonts from '../components/kitui/MyFonts.vue'
import MyComponents from '@/components/kitui/MyComponents.vue'
import MyCards from '@/components/kitui/MyCards.vue'
export default {
  name: 'CreateView',
  data() {
    return {
      currentStep: 1
    }
  },
  components: {
    MyLayout,
    MyColors,
    MyFonts,
    MyComponents,
    MyCards
  },
  methods: {
    nextStep() {
      if (this.currentStep < 5) {
        console.log(this.currentStep)
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
}
</script>