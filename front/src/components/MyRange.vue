<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input type="range" :min="min" :max="max" :step="step" :value="value" @input="$emit('input:value', $event.target.value)">
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
        value: Number,
        
    },
    emits: ['input:value']
}
</script>
