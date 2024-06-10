import { defineStore } from 'pinia';

export const useComponentsStore = defineStore('components', {
    state: () => ({
        btnPaddingX: 0 as Number,
        btnPaddingY: 0 as Number,
        btnBorderRadius: 0 as Number,
        btnFontSize: 0 as Number,
        inputPaddingX: 0 as Number,
        inputPaddingY: 0 as Number,
        inputBorderRadius: 0 as Number,
        inputFontSize: 0 as Number,
    }),
    getters: {
        getBtnPaddingX: (state) => state.btnPaddingX,
        getBtnPaddingY: (state) => state.btnPaddingY,
        getBtnBorderRadius: (state) => state.btnBorderRadius,
        getBtnFontSize: (state) => state.btnFontSize,
        getInputPaddingX: (state) => state.inputPaddingX,
        getInputPaddingY: (state) => state.inputPaddingY,
        getInputBorderRadius: (state) => state.inputBorderRadius,
        getInputFontSize: (state) => state.inputFontSize,

    },
    actions: {
        setBtnPaddingX(value) {
            this.btnPaddingX = value;
        },
        setBtnPaddingY(value) {
            this.btnPaddingY = value;
        },
        setBtnBorderRadius(value) {
            this.btnBorderRadius = value;
        },
        setBtnFontSize(value) {
            this.btnFontSize = value;
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