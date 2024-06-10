<template>
  <div>
    <h1>Couleurs</h1>
    <div>
      <section>
        <h2>Couleur sombre</h2>
        <div> 
          <my-color-picker @colorValue="setDarkBase" :label="'Base'" :name="'darkBase'"></my-color-picker>
          <div></div>
          <div></div>
        </div>
      </section>
      <section>
        <h2>Couleur claire</h2>
        <div>
          <my-color-picker @colorValue="setLightBase" :label="'Base'" :name="'lightBase'"></my-color-picker>
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
      darkBase: '#000000' as String,
      lightBase: '#FFFFFF' as String,
      accentColor: '#FF0000' as String,
    };
  },
  methods: {
    setDarkBase(value: String) {
      this.darkBase = value;
    },
    setLightBase(value: String) {
      this.lightBase = value;
    },
    setAccentColor(value: String) {
      this.accentColor = value;
    },
   
    updateStore() {
      const store = useColorsStore();
      store.setDarkBase(this.darkBase);
      store.setLightBase(this.lightBase);
      store.setAccentColor(this.accentColor);
    },
  },
};
</script>