<template>
  <div>
    <h1>Layout</h1>
    <div>
      <section>
        <h2>Conteneur</h2>
        <div>
          <my-range
            @rangeValue="setLayoutMaxWidth"
            :label="'Max-width'"
            :name="'layoutMaxWidth'"
            :min="800"
            :max="2000"
            :step="100"
            :suffix="'px'"
            :value="layoutMaxWidth"
          ></my-range>
          <div>
            <h3>Padding</h3>
            <my-range
              @rangeValue="setLayoutPaddingX"
              :label="'Horizontal'"
              :name="'layoutPaddingX'"
              :min="0"
              :max="100"
              :step="10"
              :suffix="'px'"
              :value="layoutPaddingX"
            ></my-range>
            <my-range
              @rangeValue="setLayoutPaddingY"
              :label="'Vertical'"
              :name="'layoutPaddingY'"
              :min="0"
              :max="100"
              :step="10"
              :suffix="'px'"
              :value="layoutPaddingY"
            ></my-range>
          </div>
        </div>
      </section>
      <section>
        <h2>Grille reponsive</h2>
        <div>
          <my-input
            @inputValue="setLayoutBreakpointLarge"
            :label="'Large'"
            :name="'layoutBreakpointLarge'"
            :suffix="'px'"
            :value="layoutBreakpointLarge"
          ></my-input>
          <my-input
            @inputValue="setLayoutBreakpointMedium"
            :label="'Medium'"
            :name="'layoutBreakpointMedium'"
            :suffix="'px'"
            :value="layoutBreakpointMedium"
          ></my-input>
          <my-input
            @inputValue="setLayoutBreakpointSmall"
            :label="'layoutBreakpointSmall'"
            :name="'layoutBreakpointSmall'"
            :suffix="'px'"
            :value="layoutBreakpointSmall"
          ></my-input>
          <my-range
            @rangeValue="setLayoutNbColumns"
            :label="'Nombre de colonnes (max 12)'"
            :name="'layoutNbColumns'"
            :min="1"
            :max="12"
            :step="1"
            :value="layoutNbColumns"
          ></my-range>
          <my-range
            @rangeValue="setLayoutGutter"
            :label="'Espacement'"
            :name="'layoutGutter'"
            :min="0"
            :max="80"
            :step="4"
            :suffix="'px'"
            :value="layoutGutter"
          ></my-range>
        </div>
      </section>
      <my-button :id="'nextButton'" :value="'Suivant'" @click="nextStep"></my-button>
    </div>
    <div>
      <h1>Rendu</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/layout'

export default {
  name: 'Layout',
  data() {
    return {
      layoutMaxWidth: 800 as Number,
      layoutPaddingX: 0 as Number,
      layoutPaddingY: 0 as Number,
      layoutBreakpointLarge: 0 as Number,
      layoutBreakpointMedium: 0 as Number,
      layoutBreakpointSmall: 0 as Number,
      layoutNbColumns: 1 as Number,
      layoutGutter: 0 as Number
    }
  },
  mounted() {
    const store = useLayoutStore()
    this.layoutMaxWidth = store.getLayoutMaxWidth
    this.layoutPaddingX = store.getLayoutPaddingX
    this.layoutPaddingY = store.getLayoutPaddingY
    this.layoutBreakpointLarge = store.getLayoutBreakpointLarge
    this.layoutBreakpointMedium = store.getLayoutBreakpointMedium
    this.layoutBreakpointSmall = store.getLayoutBreakpointSmall
    this.layoutNbColumns = store.getLayoutNbColumns
    this.layoutGutter = store.getLayoutGutter
  },
  emits: ['next'],
  methods: {
    setLayoutMaxWidth(value: Number) {
      this.layoutMaxWidth = value
    },
    setLayoutPaddingX(value: Number) {
      this.layoutPaddingX = value
    },
    setLayoutPaddingY(value: Number) {
      this.layoutPaddingY = value
    },
    setLayoutNbColumns(value: Number) {
      this.layoutNbColumns = value
    },
    setLayoutGutter(value: Number) {
      this.layoutGutter = value
    },
    setLayoutBreakpointLarge(value: Number) {
      this.layoutBreakpointLarge = value
    },
    setLayoutBreakpointMedium(value: Number) {
      this.layoutBreakpointMedium = value
    },
    setLayoutBreakpointSmall(value: Number) {
      this.layoutBreakpointSmall = value
    },
    updateStore() {
      const store = useLayoutStore()
      store.setLayoutMaxWidth(this.layoutMaxWidth)
      store.setLayoutPaddingX(this.layoutPaddingX)
      store.setLayoutPaddingY(this.layoutPaddingY)
      store.setLayoutBreakpointLarge(this.layoutBreakpointLarge)
      store.setLayoutBreakpointMedium(this.layoutBreakpointMedium)
      store.setLayoutBreakpointSmall(this.layoutBreakpointSmall)
      store.setLayoutNbColumns(this.layoutNbColumns)
      store.setLayoutGutter(this.layoutGutter)
    },
    nextStep() {
      this.updateStore()
      this.$emit('next')
    }
  }
}
</script>