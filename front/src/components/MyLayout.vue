<template>
  <div>
    <h1>Layout</h1>
    <div>
      <section>
        <h2>Conteneur</h2>
        <div> 
          <my-range v-model:value="maxWidth" :label="'Max-width'" :name="'maxWidth'" :min="800" :max="2000" :step="100"></my-range>
          <div>
            <h3>Padding</h3>
            <my-range v-model="xPadding" :label="'Horizontal'" :name="'xPadding'" :min="800" :max="2000" :step="100"></my-range>
            <my-range v-model="yPadding" :label="'Vertical'" :name="'yPadding'" :min="800" :max="2000" :step="100"></my-range>
          
          </div>
        </div>
      </section>
      <section>
        <h2>Grille reponsive</h2>
        <div>
          <my-input :label="'Large'" :name="'lg'"></my-input>
          <my-input :label="'Medium'" :name="'md'"></my-input>
          <my-input :label="'Small'" :name="'sm'"></my-input>
          <my-range v-model="nbCols" :label="'Nombre de colonnes (max 12)'" :name="'nbCols'" :min="800" :max="2000" :step="100"></my-range>
          <my-input :label="'Espacement'" :name="'gap'"></my-input>
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
      xPadding: 800,
      yPadding: 800,
      lg: 0,
      md: 0,
      sm: 0,
      nbCols: 0,
      gap: 0,
    };
  },
  methods: {
    updateStore() {
      const store = useLayoutStore();
      store.setMaxWidth(this.maxWidth);
      store.setXPadding(this.xPadding);
      store.setYPadding(this.yPadding);
      console.log(store.getMaxWidth);
    },
  },
};
</script>