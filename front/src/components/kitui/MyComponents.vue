<template>
  <div>
    <h1>Composants</h1>
    <div>
      <section>
        <h2>Boutons</h2>
        <div> 
          <h3>Padding</h3>
          <my-range @rangeValue="setButtonPaddingX" :label="'Horizontal'" :name="'buttonPaddingX'" :min="0" :max="100" :step="10" :suffix="'px'" :value="buttonPaddingX"></my-range>
          <my-range @rangeValue="setButtonPaddingY" :label="'Vertical'" :name="'buttonPaddingY'" :min="0" :max="100" :step="10" :suffix="'px'" :value="buttonPaddingY"></my-range>
          <my-range @rangeValue="setButtonBorderRadius" :label="'Arrondis'" :name="'buttonBorderRadius'" :min="0" :max="50" :step="5" :suffix="'px'" :value="buttonBorderRadius"></my-range>
          <my-range @rangeValue="setButtonFontSize" :label="'Taille du texte'" :name="'buttonFontSize'" :min="10" :max="30" :step="2" :suffix="'px'" :value="buttonFontSize"></my-range>
        </div>
      </section>
      <section>
        <h2>Inputs</h2>
        <div>
          <h3>Padding</h3>
          <my-range @rangeValue="setInputPaddingX" :label="'Horizontal'" :name="'inputPaddingX'" :min="0" :max="100" :step="10" :suffix="'px'" :value="inputPaddingX"></my-range>
          <my-range @rangeValue="setInputPaddingY" :label="'Vertical'" :name="'inputPaddingY'" :min="0" :max="100" :step="10" :suffix="'px'" :value="inputPaddingY"></my-range>
          <my-range @rangeValue="setInputBorderRadius" :label="'Arrondis'" :name="'inputBorderRadius'" :min="0" :max="50" :step="5" :suffix="'px'" :value="inputBorderRadius"></my-range>
          <my-range @rangeValue="setInputFontSize" :label="'Taille du texte'" :name="'inputFontSize'" :min="10" :max="30" :step="2" :suffix="'px'" :value="inputFontSize"></my-range>
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
import { useComponentsStore } from '@/stores/components';

export default {
  name: 'Components',
  data() {
    return {
      buttonPaddingX: 0 as Number,
      buttonPaddingY: 0 as Number,
      buttonBorderRadius: 0 as Number,
      buttonFontSize: 10 as Number,
      inputPaddingX: 0 as Number,
      inputPaddingY: 0 as Number,
      inputBorderRadius: 0 as Number,
      inputFontSize: 10 as Number,
    };
  },
  methods: {
    setButtonPaddingX(value: Number) {
      this.buttonPaddingX = value;
    },
    setButtonPaddingY(value: Number) {
      this.buttonPaddingY = value;
    },
    setButtonBorderRadius(value: Number) {
      this.buttonBorderRadius = value;
    },
    setButtonFontSize(value: Number) {
      this.buttonFontSize = value;
    },
    setInputPaddingX(value: Number) {
      this.inputPaddingX = value;
    },
    setInputPaddingY(value: Number) {
      this.inputPaddingY = value;
    },
    setInputBorderRadius(value: Number) {
      this.inputBorderRadius = value;
    },
    setInputFontSize(value: Number) {
      this.inputFontSize = value;
    },
    updateStore() {
      const store = useComponentsStore();
      store.setButtonPaddingX(this.buttonPaddingX);
      store.setButtonPaddingY(this.buttonPaddingY);
      store.setButtonBorderRadius(this.buttonBorderRadius);
      store.setButtonFontSize(this.buttonFontSize);
      store.setInputPaddingX(this.inputPaddingX);
      store.setInputPaddingY(this.inputPaddingY);
      store.setInputBorderRadius(this.inputBorderRadius);
      store.setInputFontSize(this.inputFontSize); 
    },
  },
};
</script>