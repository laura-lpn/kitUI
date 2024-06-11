<template>
  <div>
    <h1>Couleurs</h1>
    <div>
      <section>
        <h2>Couleur sombre</h2>
        <div> 
          <my-color-picker @colorValue="setColorLightBase" :label="'Base'" :name="'colorLightBase'"></my-color-picker>
          <div></div>
          <div></div>
        </div>
      </section>
      <section>
        <h2>Couleur claire</h2>
        <div>
          <my-color-picker @colorValue="setColorDarkBase" :label="'Base'" :name="'colorDarkBase'"></my-color-picker>
          <div></div>
          <div></div>
        </div>
      </section>
      <section>
        <h2>Couleur d'accent</h2>
        <div>
          <my-color-picker @colorValue="setAccentColor" :label="''" :name="'accentColor'"></my-color-picker>
        </div>
      </section>
      <my-button :id="'previousButton'" :value="'Précédent'" @click="updateStore"></my-button>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="updateStore"></my-button>
    </div>
    <div>
        <h1>Rendu</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { useColorsStore } from '@/stores/colors';

export default {
  name: 'Layout',
  data() {
    return {
      colorLightBase: '#000000' as String,
      colorDarkBase: '#FFFFFF' as String,
      accentColor: '#FF0000' as String,
    };
  },
  methods: {
    setColorLightBase(value: String) {
      this.colorLightBase = value;
    },
    setColorDarkBase(value: String) {
      this.colorDarkBase = value;
    },
    setAccentColor(value: String) {
      this.accentColor = value;
    },
   
    updateStore() {
      const store = useColorsStore();
      store.setColorLightBase(this.colorLightBase);
      store.setColorDarkBase(this.colorDarkBase);
      store.setAccentColor(this.accentColor);
    },
  },
};
</script>