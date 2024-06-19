import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cardPaddingX: 20 as Number,
    cardPaddingY: 8 as Number,
    cardBorderRadius: 16 as Number
  }),
  getters: {
    getCardPaddingX: (state) => state.cardPaddingX,
    getCardPaddingY: (state) => state.cardPaddingY,
    getCardBorderRadius: (state) => state.cardBorderRadius
  },
  actions: {
    setCardPaddingX(value: Number) {
      this.cardPaddingX = value
    },
    setCardPaddingY(value: Number) {
      this.cardPaddingY = value
    },
    setCardBorderRadius(value: Number) {
      this.cardBorderRadius = value
    }
  }
})
