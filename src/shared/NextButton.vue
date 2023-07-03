<script setup>
const props = defineProps({
    routeName: String,
    label: String,
    isDisabled: Boolean
});
</script>

<template>
    <div class="next w-100">
        <RouterLink :to="(isDisabled) ? {} : {name: routeName }">
            <BButton :disabled="isDisabled" class="button button__next">{{ (isDisabled) ? "Введите поля!" : label }}</BButton>
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