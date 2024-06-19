<template>
        <button :id="id" class="shadow-extern py-1 px-1 rounded-main focus:rounded-main group text-pink">
            <div class="group-active:shadow-intern group-hover:shadow-intern py-1 px-5 rounded-main flex items-center justify-center gap-4">
                <font-awesome-icon :icon="['fas', 'chevron-left']" v-if="value === 'Précédent'" />
                {{ value }}
                <font-awesome-icon :icon="['fas', 'chevron-right']" v-if="value === 'Suivant'" />
            </div>
        </button>
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