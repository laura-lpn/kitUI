<template>
  <div class="flex flex-col justify-center items-center w-full xl:px-16">
    <h1 class="text-3xl text-pink font-semibold mb-8">Typographies</h1>
    <section class="flex w-full gap-8 lg:gap-16 px-8 md:px-0">
      <div class="flex flex-col w-full gap-12 md:w-2/5">
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Titres</h2>
          <div class="flex flex-col gap-4">
            <my-select @selectValue="setTitleFontFamily" :label="'Police'" :name="'titleFontFamily'" :options="fonts" :value="titleFontFamily"></my-select>
            <h3 class="text-pink text-base text-medium">Titre 1</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH1FontSize" :label="'Taille'" :name="'h1FontSize'" :value="h1FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH1FontWeight" :label="'Graisse'" :name="'h1FontWeight'" :options="FontWeights" :value="h1FontWeight" class="w-1/2"></my-select>
            </div>
            <h3 class="text-pink text-base text-medium">Titre 2</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH2FontSize" :label="'Taille'" :name="'h2FontSize'" :value="h2FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH2FontWeight" :label="'Graisse'" :name="'h2FontWeight'" :options="FontWeights" :value="h2FontWeight" class="w-1/2"></my-select>
            </div>
            <h3 class="text-pink text-base text-medium">Titre 3</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH3FontSize" :label="'Taille'" :name="'h3FontSize'" :value="h3FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH3FontWeight" :label="'Graisse'" :name="'h3FontWeight'" :options="FontWeights" :value="h3FontWeight" class="w-1/2"></my-select>
            </div>
            <h3 class="text-pink text-base text-medium">Titre 4</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH4FontSize" :label="'Taille'" :name="'h4FontSize'" :value="h4FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH4FontWeight" :label="'Graisse'" :name="'h4FontWeight'" :options="FontWeights" :value="h4FontWeight" class="w-1/2"></my-select>
            </div>
            <h3 class="text-pink text-base text-medium">Titre 5</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH5FontSize" :label="'Taille'" :name="'h5FontSize'" :value="h5FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH5FontWeight" :label="'Graisse'" :name="'h5FontWeight'" :options="FontWeights" :value="h5FontWeight" class="w-1/2"></my-select>
            </div>
            <h3 class="text-pink text-base text-medium">Titre 6</h3>
            <div class="flex gap-3 w-full items-end">
              <my-input @inputValue="setH6FontSize" :label="'Taille'" :name="'h6FontSize'" :value="h6FontSize" class="w-1/2"></my-input>
              <my-select @selectValue="setH6FontWeight" :label="'Graisse'" :name="'h6FontWeight'" :options="FontWeights" :value="h6FontWeight" class="w-1/2"></my-select>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Textes</h2>
          <div class="flex flex-col gap-4">
            <my-select @selectValue="setTextFontFamily" :label="'Police'" :name="'textFontFamily'" :options="fonts" :value="textFontFamily"></my-select>
            <my-input @inputValue="setTextFontSize" :label="'Taille'" :name="'textFontSize'" :value="textFontSize"></my-input>
          </div>
        </section>
      </div>
      <div class="hidden md:flex md:w-3/5 rounded-main shadow-extern p-1">
        <div class="flex flex-col shadow-intern w-full rounded-main p-12 gap-16">
          <p class="text-2xl" :style="`font-family: '${titleFontFamily}', sans-serif;`">Police de titre</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h1FontSize}px; font-weight: ${h1FontWeight}`">Titre 1</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h2FontSize}px; font-weight: ${h2FontWeight}`">Titre 2</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h3FontSize}px; font-weight: ${h3FontWeight}`">Titre 3</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h4FontSize}px; font-weight: ${h4FontWeight}`">Titre 4</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h5FontSize}px; font-weight: ${h5FontWeight}`">Titre 5</p>
          <p :style="`font-family: '${titleFontFamily}', sans-serif; font-size: ${h6FontSize}px; font-weight: ${h6FontWeight}`">Titre 6</p>
          <p class="text-xl mt-8" :style="`font-family: '${textFontFamily}', sans-serif;`">Police de texte</p>
          <p :style="`font-family: '${textFontFamily}', sans-serif; font-size: ${textFontSize}px;`">Lorem ipsum dolor sit amet consectetur. Viverra vitae phasellus justo nisl quis nisi enim ut. At a malesuada nibh quam risus eros. Quisque enim viverra eros malesuada ut laoreet. Nibh sit vulputate ornare vitae feugiat placerat ut neque feugiat. Felis commodo vel enim neque. Vitae eget nulla integer porttitor. Nulla faucibus pharetra mollis risus id.</p>
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
import { useFontsStore } from '@/stores/fonts';

export default {
  name: 'MyFonts',
  data() {
    return {
      fonts: [
        { name: 'Roboto', value: 'Roboto' },
        { name: 'Poppins', value: 'Poppins' },
        { name: 'Lato', value: 'Lato' },
        { name: 'Ubuntu', value: 'Ubuntu' },
        { name: 'Rubik', value: 'Rubik' },
        { name: 'Playfair Display', value: 'Playfair Display' },
        { name: 'Quicksand', value: 'Quicksand' },
        { name: 'Nunito', value: 'Nunito' },
        { name: 'Montserrat', value: 'Montserrat' },
        { name: 'Raleway', value: 'Raleway' },
        { name: 'Fira Code', value: 'Fira Code' },
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
      titleFontFamily: 'Quicksand' as String,
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
      textFontFamily: 'Quicksand' as String,
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