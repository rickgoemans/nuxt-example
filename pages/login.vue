<template>
    <h1 class="text-3xl font-bold underline">
        Logging you in...
    </h1>
</template>
<script lang="ts" setup>

definePageMeta({
    middleware: [
        'sanctum:guest'
    ],
})

const email: string    = 'admin@admin.com'
const password: string = 'admin'

// const client = useSanctumClient()
// const {data, pending, error, refresh} = await useAsyncData('cookie', () =>
//     client('/sanctum/csrf-cookie')
// );

const {login} = useSanctumAuth()
await login({email, password})
</script>