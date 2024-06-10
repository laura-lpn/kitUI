<template>
  <div>
    <h1>Typographies</h1>
    <div>
      <section>
        <h2>Titres</h2>
        <div> 
          <my-select @selectValue="setTitleFont" :label="'Police'" :name="'titleFont'" :options="fonts"></my-select>
          <h4>Titre 1</h4>
          <div>
            <my-input @inputValue="setH1Size" :label="'Taille'" :name="'h1Size'" ></my-input>
            <my-select @selectValue="setH1Weight" :label="'Graisse'" :name="'h1Weight'" :options="weights"></my-select>
          </div>
          <h4>Titre 2</h4>
          <div>
            <my-input @inputValue="setH2Size" :label="'Taille'" :name="'h2Size'"></my-input>
            <my-select @selectValue="setH2Weight" :label="'Graisse'" :name="'h2Weight'" :options="weights"></my-select>
          </div>
          <h4>Titre 3</h4>
          <div>
            <my-input @inputValue="setH3Size" :label="'Taille'" :name="'h3Size'"></my-input>
            <my-select @selectValue="setH3Weight" :label="'Graisse'" :name="'h3Weight'" :options="weights"></my-select>
          </div>
          <h4>Titre 4</h4>
          <div>
            <my-input @inputValue="setH4Size" :label="'Taille'" :name="'h4Size'"></my-input>
            <my-select @selectValue="setH4Weight" :label="'Graisse'" :name="'h4Weight'" :options="weights"></my-select>
          </div>
          <h4>Titre 5</h4>
          <div>
            <my-input @inputValue="setH5Size" :label="'Taille'" :name="'h5Size'"></my-input>
            <my-select @selectValue="setH5Weight" :label="'Graisse'" :name="'h5Weight'" :options="weights"></my-select>
          </div>
          <h4>Titre 6</h4>
          <div>
            <my-input @inputValue="setH6Size" :label="'Taille'" :name="'h6Size'"></my-input>
            <my-select @selectValue="setH6Weight" :label="'Graisse'" :name="'h6Weight'" :options="weights"></my-select>
          </div>
        </div>
      </section>
      <section>
        <h2>Textes</h2>
        <div>
          <my-select @selectValue="setParagraphFont" :label="'Police'" :name="'paragraphFont'" :options="fonts"></my-select>
          <my-input @inputValue="setParagraphSize" :label="'Taille'" :name="'paragraphSize'"></my-input>
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
      weights: [
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
      titleFont: 'Arial',
      h1Size: 16,
      h1Weight: 400,
      h2Size: 14,
      h2Weight: 400,
      h3Size: 12,
      h3Weight: 400,
      h4Size: 10,
      h4Weight: 400,
      h5Size: 8,
      h5Weight: 400,
      h6Size: 6,
      h6Weight: 400,
      paragraphFont: 'Arial',
      paragraphSize: 12,
    };
  },
  methods: {
    setTitleFont(value: String) {
      this.titleFont = value;
    },
    setH1Size(value: Number) {
      this.h1Size = value;
    },
    setH1Weight(value: Number) {
      this.h1Weight = value;
    },
    setH2Size(value: Number) {
      this.h2Size = value;
    },
    setH2Weight(value: Number) {
      this.h2Weight = value;
    },
    setH3Size(value: Number) {
      this.h3Size = value;
    },
    setH3Weight(value: Number) {
      this.h3Weight = value;
    },
    setH4Size(value: Number) {
      this.h4Size = value;
    },
    setH4Weight(value: Number) {
      this.h4Weight = value;
    },
    setH5Size(value: Number) {
      this.h5Size = value;
    },
    setH5Weight(value: Number) {
      this.h5Weight = value;
    },
    setH6Size(value: Number) {
      this.h6Size = value;
    },
    setH6Weight(value: Number) {
      this.h6Weight = value;
    },
    setParagraphFont(value: String) {
      this.paragraphFont = value;
    },
    setParagraphSize(value: Number) {
      this.paragraphSize = value;
    },
   
    updateStore() {
      const store = useFontsStore();
      store.setTitleFont(this.titleFont);
      store.setH1Size(this.h1Size);
      store.setH1Weight(this.h1Weight);
      store.setH2Size(this.h2Size);
      store.setH2Weight(this.h2Weight);
      store.setH3Size(this.h3Size);
      store.setH3Weight(this.h3Weight);
      store.setH4Size(this.h4Size);
      store.setH4Weight(this.h4Weight);
      store.setH5Size(this.h5Size);
      store.setH5Weight(this.h5Weight);
      store.setH6Size(this.h6Size);
      store.setH6Weight(this.h6Weight);
      store.setParagraphFont(this.paragraphFont);
      store.setParagraphSize(this.paragraphSize);
    },
  },
};
</script>