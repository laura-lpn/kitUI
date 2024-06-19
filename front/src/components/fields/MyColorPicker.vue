<template>
    <div class="flex flex-col justify-start gap-2">
        <label :for="name" class="font-medium">{{ label }}</label>
        <div class="rounded-input shadow-extern p-1 flex items-center h-12 w-12">
            <input type="color" :name="name" :id="name" @input="updateValue" :value="value" class="bg-white w-full h-full">
        </div>
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

<style>
input[type="color"] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
}
*:focus{
    border-radius: 0;
    outline: none;
}

::-webkit-color-swatch-wrapper {
    padding: 0;
}

::-webkit-color-swatch{
    border-radius: 6px;
    border: 0;
}

::-moz-color-swatch,
::-moz-focus-inner{
    border: 0;
}

::-moz-focus-inner{
    padding: 0;
}
</style>