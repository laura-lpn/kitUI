import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        maxWidth: 0,
        layoutPaddingX: 0,
        layoutPaddingY: 0,
        lg: 0,
        md: 0,
        sm: 0,
        nbCols: 0,
        gap: 0,
    }),
    getters: {
        getMaxWidth: (state) => state.maxWidth,
        getlayoutPaddingX: (state) => state.layoutPaddingX,
        getlayoutPaddingY: (state) => state.layoutPaddingY,
        getLg: (state) => state.lg,
        getMd: (state) => state.md,
        getSm: (state) => state.sm,
        getNbCols: (state) => state.nbCols,
        getGap: (state) => state.gap,
    },
    actions: {
        setMaxWidth(value) {
            this.maxWidth = value;
        },
        setlayoutPaddingX(value) {
            this.layoutPaddingX = value;
        },
        setlayoutPaddingY(value) {
            this.layoutPaddingY = value;
        },
        setLg(value) {
            this.lg = value;
        },
        setMd(value) {
            this.md = value;
        },
        setSm(value) {
            this.sm = value;
        },
        setNbCols(value) {
            this.nbCols = value;
        },
        setGap(value) {
            this.gap = value;
        },
    },
});