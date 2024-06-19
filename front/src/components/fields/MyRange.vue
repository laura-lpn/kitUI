<template>
    <div class="flex flex-col justify-start gap-2">
        <div class="flex justify-between gap-2">
            <label :for="name" class="font-medium font-sm">{{ label }}</label>
            <div class="flex items-center justify-center gap-1">
                <span class="text-pink">
                    {{ value }}
                </span>
                <span v-if="suffix">
                    {{ suffix }}
                </span>
            </div>
        </div>
        <div class="rounded-main shadow-extern p-1 flex">
            <input :id="name" type="range" :min="min" :max="max" :step="step" :value="value" @input="updateValue" 
            class="w-full appearance-none bg-white rounded-main shadow-intern accent-pink text-pink">
        </div>
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
            required: false
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