<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input type="number" :name="name" :id="name" @input="updateValue" :value="value">
        <span>{{ suffix }}</span>
    </div>
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        suffix: {
            type: String,
            default: 'px'
        },
        value: {
            type: Number,
            required: true
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('inputValue', Number(event.target.value));
        }
    }
}
</script>