import { defineStore } from 'pinia';

export const useColorsStore = defineStore('colors', {
    state: () => ({
        colorLightBase: '#AEE862' as String,
        colorLightDarker: '#80AC47' as String,
        colorLightLighter: '#D9FFA7' as String,
        colorDarkBase: '#EA607C' as String,
        colorDarkDarker: '#D72045' as String,
        colorDarkLighter: '#FF96AC' as String,
        accentColor: '#E2B208' as String,
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