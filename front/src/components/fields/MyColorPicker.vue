<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input type="color" :name="name" :id="name" @input="updateValue" :value="value">
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
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('colorValue', event.target.value);
        }
    }
}
</script>