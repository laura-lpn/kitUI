<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input type="text" :name="name" :id="name">
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

    },
}
</script>