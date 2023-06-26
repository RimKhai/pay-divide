<script setup>
const props = defineProps({
    label: String,
})
</script>

<template>
    <div class="card d-flex flex-column justify-content-center align-items-center">
        <BAvatar></BAvatar>
        <p>{{ label }}</p>
    </div>
</template>

<style lang='scss' scoped>
.card {
    background: $second-color;
    padding: 2*$ui-step;
    height: 100%;
    width: 20*$ui-step;
}
</style>