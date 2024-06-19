<template>
  <div class="flex flex-col justify-center items-center w-full xl:px-16">
    <h1 class="text-3xl text-pink font-semibold mb-8">Tuiles</h1>
    <section class="flex w-full gap-8 lg:gap-16 px-8 md:px-0">
      <div class="flex flex-col w-full gap-12 md:w-2/5">
        <section>
          <h2 class="text-pink text-xl text-medium mb-4">Conteneur</h2>
          <div class="flex flex-col gap-4">
            <h3 class="text-pink text-base text-medium">Padding</h3>
            <my-range
              @rangeValue="setCardPaddingX"
              :label="'Horizontal'"
              :name="'cardPaddingX'"
              :min="0"
              :max="40"
              :step="4"
              :suffix="'px'"
              :value="cardPaddingX"
            ></my-range>
            <my-range
              @rangeValue="setCardPaddingY"
              :label="'Vertical'"
              :name="'cardPaddingY'"
              :min="0"
              :max="40"
              :step="4"
              :suffix="'px'"
              :value="cardPaddingY"
            ></my-range>
            <my-range
              @rangeValue="setCardBorderRadius"
              :label="'Arrondis'"
              :name="'cardBorderRadius'"
              :min="0"
              :max="40"
              :step="4"
              :suffix="'px'"
              :value="cardBorderRadius"
            ></my-range>
          </div>
        </section>
      </div>
      <div class="hidden md:flex md:w-3/5 rounded-main shadow-extern p-1">
        <div class="flex flex-col shadow-intern w-full rounded-main justify-center items-center p-12 gap-32">
          <div class="border-pink relative overflow-hidden bg-pink h-60 w-48" :style="`border-radius: ${cardBorderRadius}px; padding: ${cardPaddingY}px ${cardPaddingX}px;`">
              <div class="bg-[#E2B208] h-full absolute left-0 top-0 opacity-80" :style="`width:${cardPaddingX}px;`"></div>
              <div class="bg-[#E2B208] h-full absolute right-0 top-0 opacity-80" :style="`width:${cardPaddingX}px;`"></div>
              <div class="bg-[#AEE862] w-full absolute left-0 top-0 opacity-80" :style="`height:${cardPaddingY}px;`"></div>
              <div class="bg-[#AEE862] w-full absolute left-0 bottom-0 opacity-80" :style="`height:${cardPaddingY}px;`"></div>
              <div class="h-16 w-full bg-white rounded-[12px]"></div>
              <div class="h-4 w-full bg-white rounded-[12px] mt-2"></div>
              <div class="h-4 w-full bg-white rounded-[12px] mt-2"></div>
              <div class="h-4 w-full bg-white rounded-[12px] mt-2"></div>
            </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center md:flex-row gap-4 mt-12 md:gap-16 lg:gap-32">
      <my-button :id="'previousButton'" :value="'Précédent'" @click="previousStep"></my-button>
      <my-button :id="'download'" :value="'Terminer'" @click="finishStep"></my-button>
    </section>
  </div>
</template>

<script lang="ts">
import { useCardsStore } from '@/stores/cards'

export default {
  name: 'MyCards',
  data() {
    return {
      cardPaddingX: 0 as Number,
      cardPaddingY: 0 as Number,
      cardBorderRadius: 0 as Number
    }
  },
  emits: ['previous', 'finish'],
  created() {
    const store = useCardsStore()
    this.cardPaddingX = store.getCardPaddingX
    this.cardPaddingY = store.getCardPaddingY
    this.cardBorderRadius = store.getCardBorderRadius
  },
  methods: {
    setCardPaddingX(value: Number) {
      this.cardPaddingX = value
    },
    setCardPaddingY(value: Number) {
      this.cardPaddingY = value
    },
    setCardBorderRadius(value: Number) {
      this.cardBorderRadius = value
    },

    updateStore() {
      const store = useCardsStore()
      store.setCardPaddingX(this.cardPaddingX)
      store.setCardPaddingY(this.cardPaddingY)
      store.setCardBorderRadius(this.cardBorderRadius)
    },
    previousStep() {
      this.updateStore();
      this.$emit('previous');
    },
    finishStep() {
      this.updateStore();
      this.$emit('finish');
    }
  }
}
</script>