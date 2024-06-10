<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input type="color" :name="name" :id="name" @input="updateValue">
    </div>
</template>
<script>
export default {
    name: 'MyColorPicker',
    props: {
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
    },
    methods: {
        updateValue(event) {
            this.$emit('colorValue', event.target.value);
            console.log(event.target.value);
        }
    }
}
</script>