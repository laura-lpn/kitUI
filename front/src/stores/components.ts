import { defineStore } from 'pinia';

export const useComponentsStore = defineStore('components', {
    state: () => ({
        buttonPaddingX: 0 as Number,
        buttonPaddingY: 0 as Number,
        buttonBorderRadius: 0 as Number,
        buttonFontSize: 0 as Number,
        buttonColorText: '' as String,
        inputPaddingX: 0 as Number,
        inputPaddingY: 0 as Number,
        inputBorderRadius: 0 as Number,
        inputFontSize: 0 as Number,
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
        setButtonPaddingX(value) {
            this.buttonPaddingX = value;
        },
        setButtonPaddingY(value) {
            this.buttonPaddingY = value;
        },
        setButtonBorderRadius(value) {
            this.buttonBorderRadius = value;
        },
        setButtonFontSize(value) {
            this.buttonFontSize = value;
        },
        setButtonColorText(value) {
            this.buttonColorText = value;
        },
        setInputPaddingX(value) {
            this.inputPaddingX = value;
        },
        setInputPaddingY(value) {
            this.inputPaddingY = value;
        },
        setInputBorderRadius(value) {
            this.inputBorderRadius = value;
        },
        setInputFontSize(value) {
            this.inputFontSize = value;
        },
    },
});