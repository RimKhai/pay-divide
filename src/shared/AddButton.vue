<script setup>
const emit = defineEmits(["onClick"])
const onClick = () => {
    emit("onClick")
}
</script>

<template>
    <BButton class="add_button px-4" @click="onClick">
                    <div>
                        <slot></slot>
                    </div>
    </BButton>
</template>

<style lang='scss' scoped>
.add_button {
    border-radius: $pill;
    border-color: $additional-color;
    color: $text-color;
    background: $additional-color;
    &:hover {
        background: $hover-color;
    }
}

</style>