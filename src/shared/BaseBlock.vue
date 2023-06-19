<script setup>
</script>

<template>
    <div
        class="main d-flex flex-column align-items-center justify-content-center">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: $ui-step * 4;
    background-color: $main-color;
    border-radius: $big-border;
    width: 120*$ui-step;
}
</style>