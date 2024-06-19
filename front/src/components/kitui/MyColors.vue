<template>
  <div class="flex flex-col justify-center items-center px-8">
    <h1 class="text-3xl text-pink font-semibold mb-8">Couleurs</h1>
    <section class="flex">
      <div>
        <section>
          <h2>Couleur sombre</h2>
          <div>
            <my-color-picker @colorValue="setColorDarkBase" :label="'Base'" :name="'colorDarkBase'" :value="colorDarkBase"></my-color-picker>
            <div :style="`background-color: ${colorDarkDarker}; width: 24px; height: 24px;`">
            </div>
            <div :style="`background-color: ${colorDarkLighter}; width: 24px; height: 24px;`">
            </div>
          </div>
        </section>
        <section>
          <h2>Couleur claire</h2>
          <div>
            <my-color-picker @colorValue="setColorLightBase" :label="'Base'" :name="'colorLightBase'" :value="colorLightBase"></my-color-picker>
            <div :style="`background-color: ${colorLightDarker}; width: 24px; height: 24px;`">
            </div>
            <div :style="`background-color: ${colorLightLighter}; width: 24px; height: 24px;`">
            </div>
          </div>
        </section>
        <section>
          <h2>Couleur d'accent</h2>
          <div>
            <my-color-picker @colorValue="setAccentColor" :name="'accentColor'" :value="accentColor"></my-color-picker>
          </div>
        </section>
      </div>
      <div>
        <h1>Rendu</h1>
      </div>
    </section>
    <section>
      <my-button :id="'previousButton'" :value="'Précédent'" @click="previousStep"></my-button>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="nextStep"></my-button>
    </section>
  </div>
</template>

<script lang="ts">
import { useColorsStore } from '@/stores/colors';

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
    };
  },
  emits:['next', 'previous'],
  mounted() {
    const store = useColorsStore();
    this.colorLightBase = store.getColorLightBase
    this.colorDarkBase = store.getColorDarkBase
    this.accentColor = store.getAccentColor
    this.colorDarkDarker = store.getColorDarkDarker
    this.colorDarkLighter = store.getColorDarkLighter
    this.colorLightDarker = store.getColorLightDarker
    this.colorLightLighter = store.getColorLightLighter
  },
  methods: {
    setColorLightBase(value: String) {
      this.colorLightBase = value;
      console.log('getDarkerShade', this.getDarkerShade(value));
      this.colorLightDarker = this.getDarkerShade(value);
      this.colorLightLighter = this.getLighterShade(value);
    },
    setColorDarkBase(value: String) {
      this.colorDarkBase = value;
      this.colorDarkDarker = this.getDarkerShade(value);
      this.colorDarkLighter = this.getLighterShade(value);
    },
    setAccentColor(value: String) {
      this.accentColor = value;
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