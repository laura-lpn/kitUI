<template>
    <div>
        <input type="submit" :id="id" :value="value">
    </div>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        id: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
}
</script>