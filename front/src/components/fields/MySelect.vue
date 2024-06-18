<template>
    <div>
        <label :for="name">{{ label }}</label>
        <select :name="name" :id="name" v-model="selectedValue" @change="updateValue">
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
        value: {
            type: [String, Number],
            required: false
        }
    },
    data() {
        return {
            selectedValue: this.value
        }
    },
    methods: {
        updateValue(event) {
            this.selectedValue = event.target.value;
            this.$emit('selectValue', this.selectedValue);
        }
    }
}
</script>