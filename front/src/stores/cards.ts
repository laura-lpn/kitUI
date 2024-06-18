import { defineStore } from 'pinia';

export const useCardsStore = defineStore('cards', {
    state: () => ({
        cardPaddingX: 0 as Number,
        cardPaddingY: 0 as Number,
        cardBorderRadius: 0 as Number,
    }),
    getters: {
        getCardPaddingX: (state) => state.cardPaddingX,
        getCardPaddingY: (state) => state.cardPaddingY,
        getCardBorderRadius: (state) => state.cardBorderRadius,

    },
    actions: {
        setCardPaddingX(value) {
            this.cardPaddingX = value;
        },
        setCardPaddingY(value) {
            this.cardPaddingY = value;
        },
        setCardBorderRadius(value) {
            this.cardBorderRadius = value;
        },
    },
});