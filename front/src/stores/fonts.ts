import { defineStore } from 'pinia';

export const useFontsStore = defineStore('fonts', {
    state: () => ({
        titleFont: '' as String,
        h1Size: 0 as Number,
        h1Weight: '' as String,
        h2Size: 0 as Number,
        h2Weight: '' as String,
        h3Size: 0 as Number,
        h3Weight: '' as String,
        h4Size: 0 as Number,
        h4Weight: '' as String,
        h5Size: 0 as Number,
        h5Weight: '' as String,
        h6Size: 0 as Number,
        h6Weight: '' as String,
        paragraphFont: '' as String,
        paragraphSize: 0 as Number,
            
    }),
    getters: {
        getTitleFont: (state) => state.titleFont,
        getH1Size: (state) => state.h1Size,
        getH1Weight: (state) => state.h1Weight,
        getH2Size: (state) => state.h2Size,
        getH2Weight: (state) => state.h2Weight,
        getH3Size: (state) => state.h3Size,
        getH3Weight: (state) => state.h3Weight,
        getH4Size: (state) => state.h4Size,
        getH4Weight: (state) => state.h4Weight,
        getH5Size: (state) => state.h5Size,
        getH5Weight: (state) => state.h5Weight,
        getH6Size: (state) => state.h6Size,
        getH6Weight: (state) => state.h6Weight,
        getParagraphFont: (state) => state.paragraphFont,
        getParagraphSize: (state) => state.paragraphSize,

    },
    actions: {
        setTitleFont(value) {  
            this.titleFont = value;
        },
        setH1Size(value) {
            this.h1Size = value;
        },
        setH1Weight(value) {
            this.h1Weight = value;
        },
        setH2Size(value) {
            this.h2Size = value;
        },
        setH2Weight(value) {
            this.h2Weight = value;
        },
        setH3Size(value) {
            this.h3Size = value;
        },
        setH3Weight(value) {
            this.h3Weight = value;
        },
        setH4Size(value) {
            this.h4Size = value;
        },
        setH4Weight(value) {
            this.h4Weight = value;
        },
        setH5Size(value) {
            this.h5Size = value;
        },
        setH5Weight(value) {
            this.h5Weight = value;
        },
        setH6Size(value) {
            this.h6Size = value;
        },
        setH6Weight(value) {
            this.h6Weight = value;
        },
        setParagraphFont(value) {
            this.paragraphFont = value;
        },
        setParagraphSize(value) {
            this.paragraphSize = value;
        },
    },
});