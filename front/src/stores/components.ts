import { defineStore } from 'pinia';

export const useComponentsStore = defineStore('components', {
    state: () => ({
        buttonPaddingX: 20 as Number,
        buttonPaddingY: 8 as Number,
        buttonBorderRadius: 32 as Number,
        buttonFontSize: 16 as Number,
        buttonColorText: '#D72045' as String,
        inputPaddingX: 12 as Number,
        inputPaddingY: 8 as Number,
        inputBorderRadius: 8 as Number,
        inputFontSize: 14 as Number,
    }),
    getters: {
        getButtonPaddingX: (state) => state.buttonPaddingX,
        getButtonPaddingY: (state) => state.buttonPaddingY,
        getButtonBorderRadius: (state) => state.buttonBorderRadius,
        getButtonFontSize: (state) => state.buttonFontSize,
        getButtonColorText: (state) => state.buttonColorText,
        getInputPaddingX: (state) => state.inputPaddingX,
        getInputPaddingY: (state) => state.inputPaddingY,
        getInputBorderRadius: (state) => state.inputBorderRadius,
        getInputFontSize: (state) => state.inputFontSize,

    },
    actions: {
        setButtonPaddingX(value: Number) {
            this.buttonPaddingX = value;
        },
        setButtonPaddingY(value: Number) {
            this.buttonPaddingY = value;
        },
        setButtonBorderRadius(value: Number) {
            this.buttonBorderRadius = value;
        },
        setButtonFontSize(value: Number) {
            this.buttonFontSize = value;
        },
        setButtonColorText(value: String) {
            this.buttonColorText = value;
        },
        setInputPaddingX(value: Number) {
            this.inputPaddingX = value;
        },
        setInputPaddingY(value: Number) {
            this.inputPaddingY = value;
        },
        setInputBorderRadius(value: Number) {
            this.inputBorderRadius = value;
        },
        setInputFontSize(value: Number) {
            this.inputFontSize = value;
        },
    },
});