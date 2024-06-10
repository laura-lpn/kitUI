<template>
  <div>
    <h1>Layout</h1>
    <div>
      <section>
        <h2>Conteneur</h2>
        <div> 
          <my-range @rangeValue="setMaxWidth" :label="'Max-width'" :name="'maxWidth'" :min="800" :max="2000" :step="100" :suffix="'px'" :value="maxWidth"></my-range>
          <div>
            <h3>Padding</h3>
            <my-range @rangeValue="setXPadding" :label="'Horizontal'" :name="'xPadding'" :min="0" :max="100" :step="10" :suffix="'px'" :value="xPadding"></my-range>
            <my-range @rangeValue="setYPadding" :label="'Vertical'" :name="'yPadding'" :min="0" :max="100" :step="10" :suffix="'px'" :value="yPadding"></my-range>
          
          </div>
        </div>
      </section>
      <section>
        <h2>Grille reponsive</h2>
        <div>
          <my-input @textValue="setLg" :label="'Large'" :name="'lg'" :suffix="'px'"></my-input>
          <my-input @textValue="setMd" :label="'Medium'" :name="'md'" :suffix="'px'"></my-input>
          <my-input @textValue="setSm" :label="'Small'" :name="'sm'" :suffix="'px'"></my-input>
          <my-range @rangeValue="setNbCols" :label="'Nombre de colonnes (max 12)'" :name="'nbCols'" :min="1" :max="12" :step="1" :value="nbCols"></my-range>
          <my-range @rangeValue="setGap" :label="'Espacement'" :name="'gap'" :min="0" :max="80" :step="4" :suffix="'px'" :value="gap"></my-range>
        </div>
      </section>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="updateStore"></my-button>
    </div>
    <div>
        <h1>Rendu</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/layout';

export default {
  name: 'Layout',
  data() {
    return {
      maxWidth: 800 as Number,
      xPadding: 0 as Number,
      yPadding: 0 as Number,
      lg: 0 as Number,
      md: 0 as Number,
      sm: 0 as Number,
      nbCols: 1 as Number,
      gap: 0 as Number,
    };
  },
  methods: {
    setMaxWidth(value: Number) {
      this.maxWidth = value;
    },
    setXPadding(value: Number) {
      this.xPadding = value;
    },
    setYPadding(value: Number) {
      this.yPadding = value;
    },
    setNbCols(value: Number) {
      this.nbCols = value;
    },
    setGap(value: Number) {
      this.gap = value;
    },
    setLg(value: Number) {
      this.lg = value;
    },
    setMd(value: Number) {
      this.md = value;
    },
    setSm(value: Number) {
      this.sm = value;
    },
    updateStore() {
      const store = useLayoutStore();
      store.setMaxWidth(this.maxWidth);
      store.setXPadding(this.xPadding);
      store.setYPadding(this.yPadding);  
      store.setLg(this.lg);
      store.setMd(this.md);
      store.setSm(this.sm);
      store.setNbCols(this.nbCols);
      store.setGap(this.gap);  
    },
  },
};
</script>