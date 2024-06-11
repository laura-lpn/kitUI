import { defineStore } from 'pinia';

export const useFontsStore = defineStore('fonts', {
    state: () => ({
        titleFontFamily: '' as String,
        h1FontSize: 0 as Number,
        h1FontWeight: 0 as Number,
        h2FontSize: 0 as Number,
        h2FontWeight: 0 as Number,
        h3FontSize: 0 as Number,
        h3FontWeight: 0 as Number,
        h4FontSize: 0 as Number,
        h4FontWeight: 0 as Number,
        h5FontSize: 0 as Number,
        h5FontWeight: 0 as Number,
        h6FontSize: 0 as Number,
        h6FontWeight: 0 as Number,
        textFontFamily: '' as String,
        textFontSize: 0 as Number,

    }),
    getters: {
        getTitleFontFamily: (state) => state.titleFontFamily,
        getH1FontSize: (state) => state.h1FontSize,
        getH1FontWeight: (state) => state.h1FontWeight,
        getH2FontSize: (state) => state.h2FontSize,
        getH2FontWeight: (state) => state.h2FontWeight,
        getH3FontSize: (state) => state.h3FontSize,
        getH3FontWeight: (state) => state.h3FontWeight,
        getH4FontSize: (state) => state.h4FontSize,
        getH4FontWeight: (state) => state.h4FontWeight,
        getH5FontSize: (state) => state.h5FontSize,
        getH5FontWeight: (state) => state.h5FontWeight,
        getH6FontSize: (state) => state.h6FontSize,
        getH6FontWeight: (state) => state.h6FontWeight,
        getTextFontFamily: (state) => state.textFontFamily,
        getTextFontSize: (state) => state.textFontSize,
    },
    actions: {
        setTitleFontFamily(value : String) {
            this.titleFontFamily = value;
        },
        setH1FontSize(value: Number) {
            this.h1FontSize = value;
        },
        setH1FontWeight(value: Number) {
            this.h1FontWeight = value;
        },
        setH2FontSize(value: Number) {
            this.h2FontSize = value;
        },
        setH2FontWeight(value: Number) {
            this.h2FontWeight = value;
        },
        setH3FontSize(value: Number) {
            this.h3FontSize = value;
        },
        setH3FontWeight(value: Number) {
            this.h3FontWeight = value;
        },
        setH4FontSize(value: Number) {
            this.h4FontSize = value;
        },
        setH4FontWeight(value: Number) {
            this.h4FontWeight = value;
        },
        setH5FontSize(value: Number) {
            this.h5FontSize = value;
        },
        setH5FontWeight(value: Number) {
            this.h5FontWeight = value;
        },
        setH6FontSize(value: Number) {
            this.h6FontSize = value;
        },
        setH6FontWeight(value: Number) {
            this.h6FontWeight = value;
        },
        setTextFontFamily(value: String) {
            this.textFontFamily = value;
        },
        setTextFontSize(value: Number) {
            this.textFontSize = value;
        },
    },
});