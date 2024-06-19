import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        layoutMaxWidth: 1200 as Number,
        layoutPaddingX: 60 as Number,
        layoutPaddingY: 40 as Number,
        layoutBreakpointLarge: 1024 as Number,
        layoutBreakpointMedium: 768 as Number,
        layoutBreakpointSmall: 425 as Number,
        layoutNbColumns: 12 as Number,
        layoutGutter: 16 as Number,
    }),
    getters: {
        getLayoutMaxWidth: (state) => state.layoutMaxWidth,
        getLayoutPaddingX: (state) => state.layoutPaddingX,
        getLayoutPaddingY: (state) => state.layoutPaddingY,
        getLayoutBreakpointLarge: (state) => state.layoutBreakpointLarge,
        getLayoutBreakpointMedium: (state) => state.layoutBreakpointMedium,
        getLayoutBreakpointSmall: (state) => state.layoutBreakpointSmall,
        getLayoutNbColumns: (state) => state.layoutNbColumns,
        getLayoutGutter: (state) => state.layoutGutter,
    },
    actions: {
        setLayoutMaxWidth(value: Number) {
            this.layoutMaxWidth = value;
        },
        setLayoutPaddingX(value : Number) {
            this.layoutPaddingX = value;
        },
        setLayoutPaddingY(value : Number) {
            this.layoutPaddingY = value;
        },
        setLayoutBreakpointLarge(value : Number) {
            this.layoutBreakpointLarge = value;
        },
        setLayoutBreakpointMedium(value : Number) {
            this.layoutBreakpointMedium = value;
        },
        setLayoutBreakpointSmall(value : Number) {
            this.layoutBreakpointSmall = value;
        },
        setLayoutNbColumns(value : Number) {
            this.layoutNbColumns = value;
        },
        setLayoutGutter(value : Number) {
            this.layoutGutter = value;
        },
    },
});