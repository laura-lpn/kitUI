import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        maxWidth: 0,
        xPadding: 0,
        yPadding: 0,
        lg: 0,
        md: 0,
        sm: 0,
        nbCols: 0,
        gap: 0,
    }),
    getters: {
        getMaxWidth: (state) => state.maxWidth,
        getXPadding: (state) => state.xPadding,
        getYPadding: (state) => state.yPadding,
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
        setXPadding(value) {
            this.xPadding = value;
        },
        setYPadding(value) {
            this.yPadding = value;
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