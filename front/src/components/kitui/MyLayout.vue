<template>
  <div class="flex flex-col justify-center items-center w-full xl:px-16">
    <h1 class="text-3xl text-pink font-semibold mb-8">Layout</h1>
    <section class="flex w-full gap-8 lg:gap-16 px-8 md:px-0">
      <div class="flex flex-col w-full gap-12 md:w-2/5">
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Conteneur</h2>
          <div class="flex flex-col gap-4">
            <my-range
              @rangeValue="setLayoutMaxWidth"
              label="Max-width"
              name="layoutMaxWidth"
              min=800
              max=2000
              step=100
              suffix="px"
              :value="layoutMaxWidth"
            ></my-range>
            <div class="flex flex-col gap-4">
              <h3 class="text-pink text-base text-medium">Padding</h3>
              <my-range
                @rangeValue="setLayoutPaddingX"
                label="Horizontal"
                name="layoutPaddingX"
                min=0
                max=100
                step=10
                suffix="px"
                :value="layoutPaddingX"
              ></my-range>
              <my-range
                @rangeValue="setLayoutPaddingY"
                label="Vertical"
                name="layoutPaddingY"
                min=0
                max=100
                step=10
                suffix="px"
                :value="layoutPaddingY"
              ></my-range>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Grille reponsive</h2>
          <div class="flex flex-col gap-4">
            <my-input
              @inputValue="setLayoutBreakpointLarge"
              label="Large"
              name="layoutBreakpointLarge"
              suffix="px"
              :value="layoutBreakpointLarge"
            ></my-input>
            <my-input
              @inputValue="setLayoutBreakpointMedium"
              label="Medium"
              name="layoutBreakpointMedium"
              suffix="px"
              :value="layoutBreakpointMedium"
            ></my-input>
            <my-input
              @inputValue="setLayoutBreakpointSmall"
              label="Small"
              name="layoutBreakpointSmall"
              suffix="px"
              :value="layoutBreakpointSmall"
            ></my-input>
            <my-range
              @rangeValue="setLayoutNbColumns"
              label="Nombre de colonnes (max 12)"
              name="layoutNbColumns"
              min=1
              max=12
              step=1
              :value="layoutNbColumns"
            ></my-range>
            <my-range
              @rangeValue="setLayoutGutter"
              label="Espacement"
              name="layoutGutter"
              min=0
              max=80
              step=4
              suffix="px"
              :value="layoutGutter"
            ></my-range>
          </div>
        </section>
      </div>
      <div class="hidden md:flex md:w-3/5 rounded-main shadow-extern p-1">
        <div class="flex flex-col shadow-intern w-full rounded-main justify-center items-center p-12 gap-32">
          <div class="flex flex-col justify-center gap-4">
            <div class="border-pink h-32 w-60 border rounded-input relative overflow-hidden">
              <div class="bg-[#EA607C] h-full absolute left-0 opacity-50" :style="`width:${+layoutPaddingX/4}px;`"></div>
              <div class="bg-[#EA607C] h-full absolute right-0 opacity-50" :style="`width:${+layoutPaddingX/4}px;`"></div>
              <div class="bg-[#AEE862] w-full absolute top-0 opacity-80" :style="`height:${+layoutPaddingY/4}px;`"></div>
              <div class="bg-[#AEE862] w-full absolute bottom-0 opacity-80" :style="`height:${+layoutPaddingY/4}px;`"></div>
            </div>
            <div class="flex flex-col gap-2 justify-center px-8">
              <div class="flex gap-4 items-center">
                <div class="bg-pink h-5 w-5 rounded-input"></div>
                <span class="font-medium font-sm">Padding Horizontal</span>
              </div>
              <div class="flex gap-4 items-center">
                <div class="bg-green h-5 w-5 rounded-input"></div>
                <span class="font-medium font-sm">Padding Vertical</span>
              </div>
            </div>
          </div>
          <div class="border-pink bg-green h-32 w-60 border rounded-input overflow-hidden grid px-4" :style="`grid-template-columns: repeat(${layoutNbColumns}, 1fr); column-gap: ${+layoutGutter/4}px`">
            <div v-for="columns in layoutNbColumns" class="bg-pink h-full" :key="columns"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center md:flex-row gap-4 mt-12 md:gap-16 lg:gap-32">
      <my-button id="nextButton" value="Suivant" @click="nextStep"/>
    </section>
  </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/layout'

export default {
  name: 'MyLayout',
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
  created() {
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