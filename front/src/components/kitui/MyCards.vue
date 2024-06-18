<template>
  <div>
    <h1>Tuiles</h1>
    <div>
      <section>
        <h2>Conteneur</h2>
        <div>
          <h3>Padding</h3>
          <my-range
            @rangeValue="setCardPaddingX"
            :label="'Horizontal'"
            :name="'cardPaddingX'"
            :min="0"
            :max="100"
            :step="10"
            :suffix="'px'"
            :value="cardPaddingX"
          ></my-range>
          <my-range
            @rangeValue="setCardPaddingY"
            :label="'Vertical'"
            :name="'cardPaddingY'"
            :min="0"
            :max="100"
            :step="10"
            :suffix="'px'"
            :value="cardPaddingY"
          ></my-range>
          <my-range
            @rangeValue="setCardBorderRadius"
            :label="'Arrondis'"
            :name="'cardBorderRadius'"
            :min="0"
            :max="50"
            :step="5"
            :suffix="'px'"
            :value="cardBorderRadius"
          ></my-range>
        </div>
      </section>
      <my-button :id="'previousButton'" :value="'Précédent'" @click="previousStep"></my-button>
      <my-button :id="'download'" :value="'Terminer'" @click="finishStep"></my-button>
    </div>
    <div>
      <h1>Rendu</h1>
    </div>
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
  mounted() {
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