<template>
  <div class="flex flex-col justify-center items-center w-full xl:px-16">
    <h1 class="text-3xl text-pink font-semibold mb-8">Composants</h1>
    <section class="flex w-full gap-8 lg:gap-16 px-8 md:px-0">
      <div class="flex flex-col w-full gap-12 md:w-2/5">
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Boutons</h2>
          <div class="flex flex-col gap-4">
            <h3 class="text-pink text-base text-medium">Padding</h3>
            <my-range
              @rangeValue="setButtonPaddingX"
              :label="'Horizontal'"
              :name="'buttonPaddingX'"
              :min="0"
              :max="40"
              :step="4"
              :suffix="'px'"
              :value="buttonPaddingX"
            ></my-range>
            <my-range
              @rangeValue="setButtonPaddingY"
              :label="'Vertical'"
              :name="'buttonPaddingY'"
              :min="0"
              :max="32"
              :step="4"
              :suffix="'px'"
              :value="buttonPaddingY"
            ></my-range>
            <my-range
              @rangeValue="setButtonBorderRadius"
              :label="'Arrondis'"
              :name="'buttonBorderRadius'"
              :min="0"
              :max="48"
              :step="4"
              :suffix="'px'"
              :value="buttonBorderRadius"
            ></my-range>
            <my-range
              @rangeValue="setButtonFontSize"
              :label="'Taille du texte'"
              :name="'buttonFontSize'"
              :min="10"
              :max="30"
              :step="2"
              :suffix="'px'"
              :value="buttonFontSize"
            ></my-range>
          </div>
        </section>
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Inputs</h2>
          <div class="flex flex-col gap-4">
            <h3 class="text-pink text-base text-medium">Padding</h3>
            <my-range
              @rangeValue="setInputPaddingX"
              :label="'Horizontal'"
              :name="'inputPaddingX'"
              :min="0"
              :max="40"
              :step="4"
              :suffix="'px'"
              :value="inputPaddingX"
            ></my-range>
            <my-range
              @rangeValue="setInputPaddingY"
              :label="'Vertical'"
              :name="'inputPaddingY'"
              :min="0"
              :max="32"
              :step="4"
              :suffix="'px'"
              :value="inputPaddingY"
            ></my-range>
            <my-range
              @rangeValue="setInputBorderRadius"
              :label="'Arrondis'"
              :name="'inputBorderRadius'"
              :min="0"
              :max="48"
              :step="4"
              :suffix="'px'"
              :value="inputBorderRadius"
            ></my-range>
            <my-range
              @rangeValue="setInputFontSize"
              :label="'Taille du texte'"
              :name="'inputFontSize'"
              :min="10"
              :max="30"
              :step="2"
              :suffix="'px'"
              :value="inputFontSize"
            ></my-range>
          </div>
        </section>
      </div>
      <div class="hidden md:flex md:w-3/5 rounded-main shadow-extern p-1">
        <div class="flex flex-col shadow-intern w-full rounded-main justify-center items-center p-12 gap-32">
          <div class="flex flex-col gap-8">
            <div class=" flex gap-4">
              <button class="border button" :style="`color: ${ButtonColorText}; background: ${accentColor}; font-size: ${buttonFontSize}px; padding: ${buttonPaddingY}px ${buttonPaddingX}px; border-radius: ${buttonBorderRadius}px; border-color: ${accentColor};`">Button</button>
              <button :style="`color: ${ButtonColorText}; background: ${accentColor}; font-size: ${buttonFontSize}px; padding: ${buttonPaddingY}px ${buttonPaddingX}px; border-radius: ${buttonBorderRadius}px; border-color: ${accentColor}`" class="border flex items-center justify-center gap-4">
                Button 
                <font-awesome-icon :icon="['fas', 'chevron-right']"/>
              </button>
            </div>
            <div class=" flex gap-4">
              <button class="border button bg-white" :style="`color: ${accentColor}; font-size: ${buttonFontSize}px; padding: ${buttonPaddingY}px ${buttonPaddingX}px; border-radius: ${buttonBorderRadius}px; border-color: ${accentColor};`">Button</button>
              <button :style="`color: ${accentColor}; font-size: ${buttonFontSize}px; padding: ${buttonPaddingY}px ${buttonPaddingX}px; border-radius: ${buttonBorderRadius}px; border-color: ${accentColor}`" class="border flex items-center justify-center gap-4 bg-white">
                Button 
                <font-awesome-icon :icon="['fas', 'chevron-right']"/>
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <input type="text" class="border bg-white placeholder:text-black" :style="`font-size: ${inputFontSize}px; padding: ${inputPaddingY}px ${inputPaddingX}px; border-radius: ${inputBorderRadius}px; border-color: ${accentColor};`" placeholder="placeholder">
            <input type="number" class="border bg-white w-full placeholder:text-black" :style="`font-size: ${inputFontSize}px; padding: ${inputPaddingY}px ${inputPaddingX}px; border-radius: ${inputBorderRadius}px; border-color: ${accentColor};`" placeholder="placeholder">
            <select :style="`font-size: ${inputFontSize}px; padding: ${inputPaddingY}px ${inputPaddingX}px; border-radius: ${inputBorderRadius}px; border-color: ${accentColor}`" class="border flex items-center justify-center gap-4 bg-white" placeholder="placeholder">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center md:flex-row gap-4 mt-12 md:gap-16 lg:gap-32">
      <my-button :id="'previousButton'" :value="'Précédent'" @click="previousStep"></my-button>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="nextStep"></my-button>
    </section>
  </div>
</template>

<script lang="ts">
import { useComponentsStore } from '@/stores/components'
import { useColorsStore } from '@/stores/colors'

export default {
  name: 'MyComponents',
  data() {
    return {
      buttonPaddingX: 0 as Number,
      buttonPaddingY: 0 as Number,
      buttonBorderRadius: 0 as Number,
      buttonFontSize: 10 as Number,
      ButtonColorText: '#000000' as String,
      inputPaddingX: 0 as Number,
      inputPaddingY: 0 as Number,
      inputBorderRadius: 0 as Number,
      inputFontSize: 10 as Number,
      accentColor: '' as String
    }
  },
  emits: ['next', 'previous'],
  created() {
    const store = useComponentsStore()
    this.buttonPaddingX = store.getButtonPaddingX
    this.buttonPaddingY = store.getButtonPaddingY
    this.buttonBorderRadius = store.getButtonBorderRadius
    this.buttonFontSize = store.getButtonFontSize
    this.ButtonColorText = store.getButtonColorText
    this.inputPaddingX = store.getInputPaddingX
    this.inputPaddingY = store.getInputPaddingY
    this.inputBorderRadius = store.getInputBorderRadius
    this.inputFontSize = store.getInputFontSize
    this.accentColor = useColorsStore().getAccentColor
  },
  methods: {
    setButtonPaddingX(value: Number) {
      this.buttonPaddingX = value
    },
    setButtonPaddingY(value: Number) {
      this.buttonPaddingY = value
    },
    setButtonBorderRadius(value: Number) {
      this.buttonBorderRadius = value
    },
    setButtonFontSize(value: Number) {
      this.buttonFontSize = value
    },
    setInputPaddingX(value: Number) {
      this.inputPaddingX = value
    },
    setInputPaddingY(value: Number) {
      this.inputPaddingY = value
    },
    setInputBorderRadius(value: Number) {
      this.inputBorderRadius = value
    },
    setInputFontSize(value: Number) {
      this.inputFontSize = value
    },
    updateStore() {
      const store = useComponentsStore()
      store.setButtonPaddingX(this.buttonPaddingX)
      store.setButtonPaddingY(this.buttonPaddingY)
      store.setButtonBorderRadius(this.buttonBorderRadius)
      store.setButtonFontSize(this.buttonFontSize)
      store.setInputPaddingX(this.inputPaddingX)
      store.setInputPaddingY(this.inputPaddingY)
      store.setInputBorderRadius(this.inputBorderRadius)
      store.setInputFontSize(this.inputFontSize)
    },
    nextStep() {
      this.updateStore()
      this.$emit('next')
    },
    previousStep() {
      this.updateStore()
      this.$emit('previous')
    }
  }
}
</script>