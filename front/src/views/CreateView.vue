<template>
    <my-layout></my-layout>
    <my-colors></my-colors>
    <my-fonts></my-fonts>
    <my-components></my-components>
    <my-cards></my-cards>
</template>
<script>
import MyLayout from '../components/kitui/MyLayout.vue'
import MyColors from '../components/kitui/MyColors.vue'
import MyFonts from '../components/kitui/MyFonts.vue'
import MyComponents from '@/components/kitui/MyComponents.vue'
import MyCards from '@/components/kitui/MyCards.vue'
export default {
    name: 'CreateView',
    components: {
        MyLayout,
        MyColors,
        MyFonts,
        MyComponents,
        MyCards
    }
}
</script>