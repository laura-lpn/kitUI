<template>
    <div class="flex flex-col justify-start gap-2">
        <label :for="name" class="font-medium">{{ label }}</label>
        <div class="rounded-input shadow-extern p-1 relative flex items-center">
            <input type="number" :name="name" :id="name" @input="updateValue" :value="value" class="w-full bg-white outline-none shadow-intern rounded-input px-2 py-1">
            <span class="absolute right-8">{{ suffix }}</span>
        </div>
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