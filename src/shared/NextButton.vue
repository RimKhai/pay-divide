<script setup>
const props = defineProps({
    routeName: String,
});
</script>

<template>
    <div class="next w-100">
        <RouterLink :to="{name: routeName }">
            <BButton class="button button__next">Дальше!</BButton>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.button__next {
    border-radius: $pill;
    width: 40*$ui-step;
    border-color: $additional-color;
    color: $text-color;
    background: $additional-color;
    &:hover {
        background: $hover-color;
    }
}
</style>