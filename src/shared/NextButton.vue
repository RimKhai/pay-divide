<script setup>
const props = defineProps({
    routeName: String,
});
</script>

<template>
    <div class="next w-100">
        <RouterLink :to="{name: routeName }">
            <BButton class="w-100 button button__next">Дальше!</BButton>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.button {
    background-color: $additional-color;
}

.button__next {
    margin-top: $ui-step * 2;
}
</style>