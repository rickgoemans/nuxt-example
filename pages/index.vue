<template>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</template>
<script lang="ts" setup>
definePageMeta({
    middleware: [
        'sanctum:auth'
    ],
})
</script>