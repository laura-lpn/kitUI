<template>
  <div>
    <h1>Typographies</h1>
    <div>
      <section>
        <h2>Titres</h2>
        <div> 
          <my-select @selectValue="setTitleFontFamily" :label="'Police'" :name="'titleFontFamily'" :options="fonts"></my-select>
          <h4>Titre 1</h4>
          <div>
            <my-input @inputValue="setH1FontSize" :label="'Taille'" :name="'h1FontSize'" ></my-input>
            <my-select @selectValue="setH1FontWeight" :label="'Graisse'" :name="'h1FontWeight'" :options="FontWeights"></my-select>
          </div>
          <h4>Titre 2</h4>
          <div>
            <my-input @inputValue="setH2FontSize" :label="'Taille'" :name="'h2FontSize'"></my-input>
            <my-select @selectValue="setH2FontWeight" :label="'Graisse'" :name="'h2FontWeight'" :options="FontWeights"></my-select>
          </div>
          <h4>Titre 3</h4>
          <div>
            <my-input @inputValue="setH3FontSize" :label="'Taille'" :name="'h3FontSize'"></my-input>
            <my-select @selectValue="setH3FontWeight" :label="'Graisse'" :name="'h3FontWeight'" :options="FontWeights"></my-select>
          </div>
          <h4>Titre 4</h4>
          <div>
            <my-input @inputValue="setH4FontSize" :label="'Taille'" :name="'h4FontSize'"></my-input>
            <my-select @selectValue="setH4FontWeight" :label="'Graisse'" :name="'h4FontWeight'" :options="FontWeights"></my-select>
          </div>
          <h4>Titre 5</h4>
          <div>
            <my-input @inputValue="setH5FontSize" :label="'Taille'" :name="'h5FontSize'"></my-input>
            <my-select @selectValue="setH5FontWeight" :label="'Graisse'" :name="'h5FontWeight'" :options="FontWeights"></my-select>
          </div>
          <h4>Titre 6</h4>
          <div>
            <my-input @inputValue="setH6FontSize" :label="'Taille'" :name="'h6FontSize'"></my-input>
            <my-select @selectValue="setH6FontWeight" :label="'Graisse'" :name="'h6FontWeight'" :options="FontWeights"></my-select>
          </div>
        </div>
      </section>
      <section>
        <h2>Textes</h2>
        <div>
          <my-select @selectValue="setTextFontFamily" :label="'Police'" :name="'textFontFamily'" :options="fonts"></my-select>
          <my-input @inputValue="setTextFontSize" :label="'Taille'" :name="'textFontSize'"></my-input>
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
import { useFontsStore } from '@/stores/fonts';

export default {
  name: 'Layout',
  data() {
    return {
      fonts: [
        { name: 'Arial', value: 'Arial' },
        { name: 'Verdana', value: 'Verdana' },
        { name: 'Helvetica', value: 'Helvetica' },
        { name: 'Tahoma', value: 'Tahoma' },
        { name: 'Trebuchet MS', value: 'Trebuchet MS' },
        { name: 'Times New Roman', value: 'Times New Roman' },
        { name: 'Georgia', value: 'Georgia' },
        { name: 'Garamond', value: 'Garamond' },
        { name: 'Courier New', value: 'Courier New' },
        { name: 'Brush Script MT', value: 'Brush Script MT' },
      ],
      FontWeights: [
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '400', value: '400' },
        { name: '500', value: '500' },
        { name: '600', value: '600' },
        { name: '700', value: '700' },
        { name: '800', value: '800' },
        { name: '900', value: '900' },
      ],
      titleFontFamily: 'Arial',
      h1FontSize: 16,
      h1FontWeight: 400,
      h2FontSize: 14,
      h2FontWeight: 400,
      h3FontSize: 12,
      h3FontWeight: 400,
      h4FontSize: 10,
      h4FontWeight: 400,
      h5FontSize: 8,
      h5FontWeight: 400,
      h6FontSize: 6,
      h6FontWeight: 400,
      textFontFamily: 'Arial',
      textFontSize: 12,
    };
  },
  methods: {
    setTitleFontFamily(value: String) {
      this.titleFontFamily = value;
    },
    setH1FontSize(value: Number) {
      this.h1FontSize = value;
    },
    setH1FontWeight(value: Number) {
      this.h1FontWeight = value;
    },
    setH2FontSize(value: Number) {
      this.h2FontSize = value;
    },
    setH2FontWeight(value: Number) {
      this.h2FontWeight = value;
    },
    setH3FontSize(value: Number) {
      this.h3FontSize = value;
    },
    setH3FontWeight(value: Number) {
      this.h3FontWeight = value;
    },
    setH4FontSize(value: Number) {
      this.h4FontSize = value;
    },
    setH4FontWeight(value: Number) {
      this.h4FontWeight = value;
    },
    setH5FontSize(value: Number) {
      this.h5FontSize = value;
    },
    setH5FontWeight(value: Number) {
      this.h5FontWeight = value;
    },
    setH6FontSize(value: Number) {
      this.h6FontSize = value;
    },
    setH6FontWeight(value: Number) {
      this.h6FontWeight = value;
    },
    setTextFontFamily(value: String) {
      this.textFontFamily = value;
    },
    setTextFontSize(value: Number) {
      this.textFontSize = value;
    },
   
    updateStore() {
      const store = useFontsStore();
      store.setTitleFontFamily(this.titleFontFamily);
      store.setH1FontSize(this.h1FontSize);
      store.setH1FontWeight(this.h1FontWeight);
      store.setH2FontSize(this.h2FontSize);
      store.setH2FontWeight(this.h2FontWeight);
      store.setH3FontSize(this.h3FontSize);
      store.setH3FontWeight(this.h3FontWeight);
      store.setH4FontSize(this.h4FontSize);
      store.setH4FontWeight(this.h4FontWeight);
      store.setH5FontSize(this.h5FontSize);
      store.setH5FontWeight(this.h5FontWeight);
      store.setH6FontSize(this.h6FontSize);
      store.setH6FontWeight(this.h6FontWeight);
      store.setTextFontFamily(this.textFontFamily);
      store.setTextFontSize(this.textFontSize);
    },
  },
};
</script>