<template>
    <div>
        <div>
            <label :for="name">{{ label }}</label>
            <span>{{ value }} {{ suffix }}</span>
        </div>
        <input :id="name" type="range" :min="min" :max="max" :step="step" :value="value" @input="updateValue">
    </div>
</template>
<script>
export default {
    name: 'MyRange',
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        step: {
            type: Number,
            required: true
        },
        suffix: {
            type: String,
            default: 'px'
        },
        value: {
            type: Number,
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('rangeValue', Number(event.target.value));
        }
    }
}
</script>