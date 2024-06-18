<template>
  <div>
    <h1>Typographies</h1>
    <div>
      <section>
        <h2>Titres</h2>
        <div> 
          <my-select @selectValue="setTitleFontFamily" :label="'Police'" :name="'titleFontFamily'" :options="fonts" :value="titleFontFamily"></my-select>
           {{ titleFontFamily }}
          <h4>Titre 1</h4>
          <div>
            <my-input @inputValue="setH1FontSize" :label="'Taille'" :name="'h1FontSize'" :value="h1FontSize"></my-input>
            <my-select @selectValue="setH1FontWeight" :label="'Graisse'" :name="'h1FontWeight'" :options="FontWeights" :value="h1FontWeight"></my-select>
          </div>
          <h4>Titre 2</h4>
          <div>
            <my-input @inputValue="setH2FontSize" :label="'Taille'" :name="'h2FontSize'" :value="h2FontSize"></my-input>
            <my-select @selectValue="setH2FontWeight" :label="'Graisse'" :name="'h2FontWeight'" :options="FontWeights" :value="h2FontWeight"></my-select>
          </div>
          <h4>Titre 3</h4>
          <div>
            <my-input @inputValue="setH3FontSize" :label="'Taille'" :name="'h3FontSize'" :value="h3FontSize"></my-input>
            <my-select @selectValue="setH3FontWeight" :label="'Graisse'" :name="'h3FontWeight'" :options="FontWeights" :value="h3FontWeight"></my-select>
          </div>
          <h4>Titre 4</h4>
          <div>
            <my-input @inputValue="setH4FontSize" :label="'Taille'" :name="'h4FontSize'" :value="h4FontSize"></my-input>
            <my-select @selectValue="setH4FontWeight" :label="'Graisse'" :name="'h4FontWeight'" :options="FontWeights" :value="h4FontWeight"></my-select>
          </div>
          <h4>Titre 5</h4>
          <div>
            <my-input @inputValue="setH5FontSize" :label="'Taille'" :name="'h5FontSize'" :value="h5FontSize"></my-input>
            <my-select @selectValue="setH5FontWeight" :label="'Graisse'" :name="'h5FontWeight'" :options="FontWeights" :value="h5FontWeight"></my-select>
          </div>
          <h4>Titre 6</h4>
          <div>
            <my-input @inputValue="setH6FontSize" :label="'Taille'" :name="'h6FontSize'" :value="h6FontSize"></my-input>
            <my-select @selectValue="setH6FontWeight" :label="'Graisse'" :name="'h6FontWeight'" :options="FontWeights" :value="h6FontWeight"></my-select>
          </div>
        </div>
      </section>
      <section>
        <h2>Textes</h2>
        <div>
          <my-select @selectValue="setTextFontFamily" :label="'Police'" :name="'textFontFamily'" :options="fonts" :value="textFontFamily"></my-select>
          <my-input @inputValue="setTextFontSize" :label="'Taille'" :name="'textFontSize'" :value="textFontSize"></my-input>
        </div>
      </section>
      <my-button :id="'previousButton'" :value="'Précédent'" @click="previousStep"></my-button>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="nextStep"></my-button>

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
      titleFontFamily: 'Arial' as String,
      h1FontSize: 16 as Number,
      h1FontWeight: 400 as Number,
      h2FontSize: 14 as Number,
      h2FontWeight: 400 as Number,
      h3FontSize: 12 as Number,
      h3FontWeight: 400 as Number,
      h4FontSize: 10 as Number,
      h4FontWeight: 400 as Number,
      h5FontSize: 8 as Number,
      h5FontWeight: 400 as Number,
      h6FontSize: 6 as Number,
      h6FontWeight: 400 as Number,
      textFontFamily: 'Arial' as String,
      textFontSize: 12 as Number,
    };
  },
  created() {
    const store = useFontsStore();
    this.titleFontFamily = store.getTitleFontFamily;
    this.h1FontSize = store.getH1FontSize;
    this.h1FontWeight = store.getH1FontWeight;
    this.h2FontSize = store.getH2FontSize;
    this.h2FontWeight = store.getH2FontWeight;
    this.h3FontSize = store.getH3FontSize;
    this.h3FontWeight = store.getH3FontWeight;
    this.h4FontSize = store.getH4FontSize;
    this.h4FontWeight = store.getH4FontWeight;
    this.h5FontSize = store.getH5FontSize;
    this.h5FontWeight = store.getH5FontWeight;
    this.h6FontSize = store.getH6FontSize;
    this.h6FontWeight = store.getH6FontWeight;
    this.textFontFamily = store.getTextFontFamily;
    this.textFontSize = store.getTextFontSize;
  },
  emits:['next', 'previous'],
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