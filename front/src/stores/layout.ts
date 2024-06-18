import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        layoutMaxWidth: 0 as Number,
        layoutPaddingX: 0 as Number,
        layoutPaddingY: 0 as Number,
        layoutBreakpointLarge: 0 as Number,
        layoutBreakpointMedium: 0 as Number,
        layoutBreakpointSmall: 0 as Number,
        layoutNbColumns: 0 as Number,
        layoutGutter: 0 as Number,
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