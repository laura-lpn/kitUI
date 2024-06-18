<template>
  <div class="bg-white rounded-[32px] mt-12 w-3/4 mx-auto py-8 px-20">
    <div>
      <div class="flex justify-between w-3/4 mx-auto">
        <div :class="{ active: currentStep === 1 }">1</div>
        <div :class="{ active: currentStep === 2 }">2</div>
        <div :class="{ active: currentStep === 3 }">3</div>
        <div :class="{ active: currentStep === 4 }">4</div>
        <div :class="{ active: currentStep === 5 }">5</div>
      </div>
      <my-layout v-if="currentStep === 1" @next="nextStep"></my-layout>
      <my-colors v-if="currentStep === 2" @previous="previousStep" @next="nextStep"></my-colors>
      <my-fonts v-if="currentStep === 3" @previous="previousStep" @next="nextStep"></my-fonts>
      <my-components v-if="currentStep === 4" @previous="previousStep" @next="nextStep"></my-components>
      <my-cards v-if="currentStep === 5" @previous="previousStep" @finish="sendKit"></my-cards>
    </div>
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
          router.push({ name: 'preview' })
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
</style>
