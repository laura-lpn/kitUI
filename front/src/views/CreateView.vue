<template>
  <div class="bg-white rounded-[32px] my-12 w-4/5 sm:w-3/4 mx-auto py-8 px-6 sm:px-16 md:px-20 flex flex-col justify-center items-center">
    <section class="flex justify-center w-full lg:w-3/4 lg:px-12 md:mx-auto mb-6 gap-4 sm:gap-6 md:gap-8">
      <div :class="{ active: currentStep === 1 }" class="flex flex-col items-center gap-2 w-fit md:w-1/5">
        <span class="text-pink md:text-2xl shadow-extern rounded-[50px] aspect-square h-10 w-10 md:h-16 md:w-16 flex justify-center items-center">
          <p class="text-pink text-lg md:text-2xl rounded-[50px] aspect-square h-8 w-8 md:h-14 md:w-14 flex justify-center items-center">1</p>
        </span>
        <span class="hidden md:flex font-medium text-sm">Layout</span>
      </div>
      <div :class="{ active: currentStep === 2 }" class="flex flex-col items-center gap-2 w-fit md:w-1/5">
        <span class="text-pink md:text-2xl shadow-extern rounded-[50px] aspect-square h-10 w-10 md:h-16 md:w-16 flex justify-center items-center">
          <p class="text-pink text-lg md:text-2xl rounded-[50px] aspect-square h-8 w-8 md:h-14 md:w-14 flex justify-center items-center">2</p>
        </span>
        <span class="hidden md:flex font-medium text-sm">Couleurs</span>
      </div>
      <div :class="{ active: currentStep === 3 }" class="flex flex-col items-center gap-2 w-fit md:w-1/5">
        <span class="text-pink md:text-2xl shadow-extern rounded-[50px] aspect-square h-10 w-10 md:h-16 md:w-16 flex justify-center items-center">
          <p class="text-pink text-lg md:text-2xl rounded-[50px] aspect-square h-8 w-8 md:h-14 md:w-14 flex justify-center items-center">3</p>
        </span>
        <span class="hidden md:flex font-medium text-sm">Typographies</span>
      </div>
      <div :class="{ active: currentStep === 4 }" class="flex flex-col items-center gap-2 w-fit md:w-1/5">
        <span class="text-pink md:text-2xl shadow-extern rounded-[50px] aspect-square h-10 w-10 md:h-16 md:w-16 flex justify-center items-center">
          <p class="text-pink text-lg md:text-2xl rounded-[50px] aspect-square h-8 w-8 md:h-14 md:w-14 flex justify-center items-center">4</p>
        </span>
        <span class="hidden md:flex font-medium text-sm">Composants</span>
      </div>
      <div :class="{ active: currentStep === 5 }" class="flex flex-col items-center gap-2 w-fit md:w-1/5">
        <span class="text-pink md:text-2xl shadow-extern rounded-[50px] aspect-square h-10 w-10 md:h-16 md:w-16 flex justify-center items-center">
          <p class="text-pink text-lg md:text-2xl rounded-[50px] aspect-square h-8 w-8 md:h-14 md:w-14 flex justify-center items-center">5</p>
        </span>
        <span class="hidden md:flex font-medium text-sm">Tuiles</span>
      </div>
    </section>
    <my-layout v-if="currentStep === 1" @next="nextStep"></my-layout>
    <my-colors v-if="currentStep === 2" @previous="previousStep" @next="nextStep"></my-colors>
    <my-fonts v-if="currentStep === 3" @previous="previousStep" @next="nextStep"></my-fonts>
    <my-components v-if="currentStep === 4" @previous="previousStep" @next="nextStep"></my-components>
    <my-cards v-if="currentStep === 5" @previous="previousStep" @finish="sendKit"></my-cards>
  </div>
</template>
<script>
import MyLayout from '../components/kitui/MyLayout.vue'
import MyColors from '../components/kitui/MyColors.vue'
import MyFonts from '../components/kitui/MyFonts.vue'
import MyComponents from '@/components/kitui/MyComponents.vue'
import MyCards from '@/components/kitui/MyCards.vue'
import { useCardsStore } from '@/stores/cards'
import { useLayoutStore } from '@/stores/layout'
import { useColorsStore } from '@/stores/colors'
import { useFontsStore } from '@/stores/fonts'
import { useComponentsStore } from '@/stores/components'
import router from '@/router'
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
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    async sendKit() {
      console.log('send kit')

      try {
        const response = await fetch('http://127.0.0.1:3000/api/kitui', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "layout": {
              "maxWidth": useLayoutStore().layoutMaxWidth,
              "padding": {
                "x": useLayoutStore().layoutPaddingX,
                "y": useLayoutStore().layoutPaddingY
              },
              "numColumns": useLayoutStore().layoutNbColumns,
              "gutter": useLayoutStore().layoutGutter,
              "breakpoints": [
                { "name": "md", "value": useLayoutStore().layoutBreakpointSmall },
                { "name": "lg", "value": useLayoutStore().layoutBreakpointMedium },
                { "name": "xl", "value": useLayoutStore().layoutBreakpointLarge }
              ]
            },
            "colors": {
              "dark": {
                "base": useColorsStore().colorDarkBase,
                "lighter": useColorsStore().colorDarkLighter,
                "darker": useColorsStore().colorDarkDarker
              },
              "light": {
                "base": useColorsStore().colorLightBase,
                "lighter": useColorsStore().colorLightLighter,
                "darker": useColorsStore().colorLightDarker
              },
              "accent": useColorsStore().accentColor
            },
            "typography": {
              "fontFamily": {
                "title": useFontsStore().titleFontFamily,
                "text": useFontsStore().textFontFamily
              },
              "style": {
                "h1": {
                  "size": useFontsStore().h1FontSize,
                  "weight": useFontsStore().h1FontWeight
                },
                "h2": {
                  "size": useFontsStore().h2FontSize,
                  "weight": useFontsStore().h2FontWeight
                },
                "h3": {
                  "size": useFontsStore().h3FontSize,
                  "weight": useFontsStore().h3FontWeight
                },
                "h4": {
                  "size": useFontsStore().h4FontSize,
                  "weight": useFontsStore().h4FontWeight
                },
                "h5": {
                  "size": useFontsStore().h5FontSize,
                  "weight": useFontsStore().h5FontWeight
                },
                "h6": {
                  "size": useFontsStore().h6FontSize,
                  "weight": useFontsStore().h6FontWeight
                },
                "text": useFontsStore().textFontSize
              }
            },
            "buttons": {
              "padding": {
                "x": useComponentsStore().buttonPaddingX,
                "y": useComponentsStore().buttonPaddingY
              },
              "borderRadius": useComponentsStore().buttonBorderRadius,
              "fontSize": useComponentsStore().buttonFontSize,
              "colorText": useComponentsStore().buttonColorText,
            },
            "inputs": {
              "padding": {
                "x": useComponentsStore().inputPaddingX,
                "y": useComponentsStore().inputPaddingY
              },
              "borderRadius": useComponentsStore().inputBorderRadius,
              "fontSize": useComponentsStore().inputFontSize,
            },
            "cards": {
              "padding": {
                "x": useCardsStore().cardPaddingX,
                "y": useCardsStore().cardPaddingY
              },
              "borderRadius": useCardsStore().cardBorderRadius
            }
          })
        })
        if(response.ok) {
          router.push({ name: 'download' })
        }

      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
.active {
  color: #EA607C;
}
.active span:first-child p {
  box-shadow: inset 8px 8px 8px #DFCFAE99, inset -8px -8px 8px #F8F2E666;
}
</style>
