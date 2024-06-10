<template>
  <div>
    <h1>Composants</h1>
    <div>
      <section>
        <h2>Boutons</h2>
        <div> 
          <h3>Padding</h3>
          <my-range @rangeValue="setBtnPaddingX" :label="'Horizontal'" :name="'btnPaddingX'" :min="0" :max="100" :step="10" :suffix="'px'" :value="btnPaddingX"></my-range>
          <my-range @rangeValue="setBtnPaddingY" :label="'Vertical'" :name="'btnPaddingY'" :min="0" :max="100" :step="10" :suffix="'px'" :value="btnPaddingY"></my-range>
          <my-range @rangeValue="setBtnBorderRadius" :label="'Arrondis'" :name="'btnBorderRadius'" :min="0" :max="50" :step="5" :suffix="'px'" :value="btnBorderRadius"></my-range>
          <my-range @rangeValue="setBtnFontSize" :label="'Taille du texte'" :name="'btnFontSize'" :min="10" :max="30" :step="2" :suffix="'px'" :value="btnFontSize"></my-range>
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
      btnPaddingX: 0 as Number,
      btnPaddingY: 0 as Number,
      btnBorderRadius: 0 as Number,
      btnFontSize: 10 as Number,
      inputPaddingX: 0 as Number,
      inputPaddingY: 0 as Number,
      inputBorderRadius: 0 as Number,
      inputFontSize: 10 as Number,
    };
  },
  methods: {
    setBtnPaddingX(value: Number) {
      this.btnPaddingX = value;
    },
    setBtnPaddingY(value: Number) {
      this.BtnPaddingY = value;
    },
    setBtnBorderRadius(value: Number) {
      this.btnBorderRadius = value;
    },
    setBtnFontSize(value: Number) {
      this.btnFontSize = value;
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
      store.setBtnPaddingX(this.btnPaddingX);
      store.setBtnPaddingY(this.BtnPaddingY);
      store.setBtnBorderRadius(this.btnBorderRadius);
      store.setBtnFontSize(this.btnFontSize);
      store.setInputPaddingX(this.inputPaddingX);
      store.setInputPaddingY(this.inputPaddingY);
      store.setInputBorderRadius(this.inputBorderRadius);
      store.setInputFontSize(this.inputFontSize); 
    },
  },
};
</script>