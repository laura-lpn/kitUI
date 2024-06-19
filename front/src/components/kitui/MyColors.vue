<template>
  <div class="flex flex-col justify-center items-center w-full xl:px-16">
    <h1 class="text-3xl text-pink font-semibold mb-8">Couleurs</h1>
    <section class="flex w-full gap-8 lg:gap-16 px-8 md:px-0">
      <div class="flex flex-col w-full gap-12 md:w-2/5">
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Couleur sombre</h2>
          <div class="flex justify-between items-end">
            <my-color-picker @colorValue="setColorDarkBase" :label="'Base'" :name="'colorDarkBase'" :value="colorDarkBase"></my-color-picker>
            <div class="flex gap-4">
              <div class="flex flex-col gap-2 items-center">
                <span class="text-sm">Claire</span>
                <div class="rounded-input shadow-extern p-1 flex items-center h-12 w-12">
                  <div class="h-full w-full rounded-input" :style="`background-color: ${colorDarkLighter};`"></div>
                </div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <span>Sombre</span>
                <div class="rounded-input shadow-extern p-1 flex items-center h-12 w-12">
                  <div class="h-full w-full rounded-input" :style="`background-color: ${colorDarkDarker};`"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Couleur claire</h2>
          <div class="flex justify-between items-end">
            <my-color-picker @colorValue="setColorLightBase" :label="'Base'" :name="'colorDarkBase'" :value="colorLightBase"></my-color-picker>
            <div class="flex gap-4">
              <div class="flex flex-col gap-2 items-center">
                <span class="text-sm">Claire</span>
                <div class="rounded-input shadow-extern p-1 flex items-center h-12 w-12">
                  <div class="h-full w-full rounded-input" :style="`background-color: ${colorLightLighter};`"></div>
                </div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <span>Sombre</span>
                <div class="rounded-input shadow-extern p-1 flex items-center h-12 w-12">
                  <div class="h-full w-full rounded-input" :style="`background-color: ${colorLightDarker};`"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Couleur d’accent</h2>
          <div>
            <my-color-picker @colorValue="setAccentColor" :name="'accentColor'" :value="accentColor"></my-color-picker>
          </div>
        </section>
      </div>
      <div class="hidden md:flex md:w-3/5 rounded-main shadow-extern p-1">
        <div class="flex flex-col shadow-intern w-full rounded-main justify-center items-center p-8 gap-8">
          <div class="flex flex-col gap-2 rounded-main py-4 px-6 w-60" :style="`background: ${colorLightLighter};`">
            <div class="flex justify-between items-center">
              <h3 class="text-base" :style="`color: ${colorLightDarker}`">Lorem ipsum</h3>
              <p class="text-base" :style="`color: ${colorDarkLighter}`">
                <font-awesome-icon :icon="['fas', 'heart']"/>
              </p>
            </div>
            <p class="text-xs" :style="`color: ${colorDarkBase}`">Lorem ipsum dolor sit amet consectetur. Suspendisse sapien tellus consequat ultricies cras ut imperdiet imperdiet.</p>
            <button class="text-xs rounded-main py-2 px-6 ml-auto mt-2" :style="`background: ${accentColor}; color: ${ButtonColorText}`">Button</button>
          </div>
          <div class="flex flex-col gap-2 rounded-main py-4 px-6 w-60" :style="`background: ${colorDarkDarker};`">
            <div class="flex justify-between items-center">
              <h3 class="text-base" :style="`color: ${colorDarkLighter}`">Lorem ipsum</h3>
              <p class="text-base" :style="`color: ${colorLightLighter}`">
                <font-awesome-icon :icon="['fas', 'heart']"/>
              </p>
            </div>
            <p class="text-xs" :style="`color: ${colorLightBase}`">Lorem ipsum dolor sit amet consectetur. Suspendisse sapien tellus consequat ultricies cras ut imperdiet imperdiet.</p>
            <button class="text-xs rounded-main py-2 px-6 ml-auto mt-2" :style="`background: ${accentColor}; color: ${ButtonColorText}`">Button</button>
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
import { useColorsStore } from '@/stores/colors';
import { useComponentsStore } from '@/stores/components';

export default {
  name: 'MyColors',
  data() {
    return {
      colorLightBase: '#000000' as String,
      colorDarkBase: '#FFFFFF' as String,
      accentColor: '#FF0000' as String,
      colorLightLighter: '' as String,
      colorLightDarker: '' as String,
      colorDarkDarker: '' as String,
      colorDarkLighter: '' as String,
      ButtonColorText: '' as String,
    };
  },
  emits:['next', 'previous'],
  created() {
    const store = useColorsStore();
    this.colorLightBase = store.getColorLightBase
    this.colorDarkBase = store.getColorDarkBase
    this.accentColor = store.getAccentColor
    this.colorDarkDarker = store.getColorDarkDarker
    this.colorDarkLighter = store.getColorDarkLighter
    this.colorLightDarker = store.getColorLightDarker
    this.colorLightLighter = store.getColorLightLighter
    this.ButtonColorText = useComponentsStore().getButtonColorText;
  },
  methods: {
    setColorLightBase(value: String) {
      this.colorLightBase = value;
      this.colorLightDarker = this.getDarkerShade(value);
      this.colorLightLighter = this.getLighterShade(value);
      this.getContrastColor(this.accentColor);
    },
    setColorDarkBase(value: String) {
      this.colorDarkBase = value;
      this.colorDarkDarker = this.getDarkerShade(value);
      this.colorDarkLighter = this.getLighterShade(value);
      this.getContrastColor(this.accentColor);
    },
    setAccentColor(value: String) {
      this.accentColor = value;
      this.getContrastColor(value);
    },

    updateStore() {
      const store = useColorsStore();
      store.setColorLightBase(this.colorLightBase);
      store.setColorDarkBase(this.colorDarkBase);
      store.setAccentColor(this.accentColor);
      store.setColorDarkDarker(this.colorDarkDarker);
      store.setColorDarkLighter(this.colorDarkLighter);
      store.setColorLightDarker(this.colorLightDarker);
      store.setColorLightLighter(this.colorLightLighter);
    },
    getDarkerShade(hexColor: String): String {
      // Convert hex color to RGB
      let r = parseInt(hexColor.slice(1, 3), 16);
      let g = parseInt(hexColor.slice(3, 5), 16);
      let b = parseInt(hexColor.slice(5, 7), 16);

      // Calculate darker color
      const factor = 0.3; // 10% darker
      r = Math.max(Math.floor(r * factor), 0);
      g = Math.max(Math.floor(g * factor), 0);
      b = Math.max(Math.floor(b * factor), 0);

      // Convert RGB back to hex
      let rHex = r.toString(16).padStart(2, '0');
      let gHex = g.toString(16).padStart(2, '0');
      let bHex = b.toString(16).padStart(2, '0');
      return "#" + rHex + gHex + bHex;
    },

    getLighterShade(hexColor: String): String {
      // Convert hex color to RGB
      let r = parseInt(hexColor.slice(1, 3), 16);
      let g = parseInt(hexColor.slice(3, 5), 16);
      let b = parseInt(hexColor.slice(5, 7), 16);

      // Calculate lighter color
      const factor = 1.7; // 10% lighter
      r = Math.min(Math.floor(r * factor), 255);
      g = Math.min(Math.floor(g * factor), 255);
      b = Math.min(Math.floor(b * factor), 255);

      // Convert RGB back to hex
      let rHex = r.toString(16).padStart(2, '0');
      let gHex = g.toString(16).padStart(2, '0');
      let bHex = b.toString(16).padStart(2, '0');
      return "#" + rHex + gHex + bHex;
    },
    hexToRgb(hex: String) {
	    // Extraction des composantes de couleur R, G et B
      hex = hex.substring(1);
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return { r, g, b };
    },
    getRelativeLuminance(r : number, g : number, b : number) {
      // Conversion des couleurs en sRGB
      const sr = r / 255;
      const sg = g / 255;
      const sb = b / 255;
      
      // Correction gamma inverse
      const rLinear = (sr <= 0.03928) ? sr / 12.92 : Math.pow((sr + 0.055) / 1.055, 2.4);
      const gLinear = (sg <= 0.03928) ? sg / 12.92 : Math.pow((sg + 0.055) / 1.055, 2.4);
      const bLinear = (sb <= 0.03928) ? sb / 12.92 : Math.pow((sb + 0.055) / 1.055, 2.4);
      
      // Calcul de la luminance relative
      return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    },
    getContrastRatio(color1: String, color2: String) : number {
      // Conversion des couleurs en RGB
      const rgb1 = this.hexToRgb(color1);
      const rgb2 = this.hexToRgb(color2);
      
      // Calcul de la luminance relative des couleurs
      const l1 = this.getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
      const l2 = this.getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
      
      // Calcul du contraste selon la formule WCAG 2.0
      const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      return contrast;
    },
    getContrastColor(accentColor: String) {
      const contrast1 = this.getContrastRatio(this.colorLightBase, accentColor);
      const contrast2 = this.getContrastRatio(this.colorLightLighter, accentColor);
      const contrast3 = this.getContrastRatio(this.colorLightDarker, accentColor);
      const contrast4 = this.getContrastRatio(this.colorDarkBase, accentColor);
      const contrast5 = this.getContrastRatio(this.colorDarkLighter, accentColor);
      const contrast6 = this.getContrastRatio(this.colorDarkDarker, accentColor);

      const contrast = Math.max(contrast1, contrast2, contrast3, contrast4, contrast5, contrast6);

      let colorContrastButton = '' as String;
      switch (contrast) {
        case contrast1:
          colorContrastButton = this.colorLightBase;
          break;
        case contrast2:
          colorContrastButton = this.colorLightLighter;
          break;
        case contrast3:
          colorContrastButton = this.colorLightDarker;
          break;
        case contrast4:
          colorContrastButton = this.colorDarkBase;
          break;
        case contrast5:
          colorContrastButton = this.colorDarkLighter;
          break;
        case contrast6:
          colorContrastButton = this.colorDarkDarker;
          break;
      }

      useComponentsStore().setButtonColorText(colorContrastButton);
      this.ButtonColorText = colorContrastButton;
    },
    nextStep() {
      this.updateStore();
      this.$emit('next');
    },
    previousStep() {
      this.updateStore();
      this.$emit('previous');
    },
  },
};
</script>