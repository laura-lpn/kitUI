import { defineStore } from 'pinia';

export const useColorsStore = defineStore('colors', {
    state: () => ({
        colorLightBase: '' as String,
        colorLightDarker: '' as String,
        colorLightLighter: '' as String,
        colorDarkBase: '' as String,
        colorDarkDarker: '' as String,
        colorDarkLighter: '' as String,
        accentColor: '' as String,
    }),
    getters: {
        getColorLightBase: (state) => state.colorLightBase,
        getColorDarkBase: (state) => state.colorDarkBase,
        getAccentColor: (state) => state.accentColor,
        getColorLightDarker: (state) => state.colorLightDarker,
        getColorLightLighter: (state) => state.colorLightLighter,
        getColorDarkDarker: (state) => state.colorDarkDarker,
        getColorDarkLighter: (state) => state.colorDarkLighter,
    },
    actions: {
        setColorLightBase(value: String) {
            this.colorLightBase = value;
        },
        setColorDarkBase(value: String) {
            this.colorDarkBase = value;
        },
        setAccentColor(value: String) {
            this.accentColor = value;
        },
        setColorLightDarker(value: String) {
            this.colorLightDarker = value;
        },
        setColorLightLighter(value: String) {
            this.colorLightLighter = value;
        },
        setColorDarkDarker(value: String) {
            this.colorDarkDarker = value;
        },
        setColorDarkLighter(value: String) {
            this.colorDarkLighter = value;
        },
    },
});