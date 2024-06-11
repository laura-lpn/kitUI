<template>
    <div>
        <label :for="name">{{ label }}</label>
        <select :name="name" :id="name" @change="updateValue">
            <option v-for="option in options" :key="option.name" :value="option.value">{{option.name}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'MySelect',
    props: {
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: false
        },
    },
    methods: {
        updateValue(event) {
            this.$emit('selectValue', event.target.value);
        }
    }
}
</script>