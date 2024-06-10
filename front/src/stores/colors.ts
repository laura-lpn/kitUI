import { defineStore } from 'pinia';

export const useColorsStore = defineStore('colors', {
    state: () => ({
        darkBase: '#000000',
        lightBase: '#ffffff',
        accentColor: '#ff0000',
    }),
    getters: {
        getDarkBase: (state) => state.darkBase,
        getLightBase: (state) => state.lightBase,
        getAccentColor: (state) => state.accentColor,
    },
    actions: {
        setDarkBase(value) {
            this.darkBase = value;
        },
        setLightBase(value) {
            this.lightBase = value;
        },
        setAccentColor(value) {
            this.accentColor = value;
        }
    },
});