<template>
    <div class="flex flex-col justify-start gap-2">
        <label :for="name" class="font-medium font-sm">{{ label }}</label>
        <div class="rounded-input shadow-extern p-1 relative flex items-center">
            <select :name="name" :id="name" v-model="selectedValue" @change="updateValue" class="w-full bg-white outline-none shadow-intern rounded-input px-2 py-1">
                <option v-for="option in options" :key="option.name" :value="option.value">{{option.name}}</option>
            </select>
        </div>
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