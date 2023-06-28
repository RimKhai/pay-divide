<script setup>
import { useMemberStore } from '../stores/MemberStore';
import { useProductStore } from "../stores/ProductStore"

const props = defineProps({
    label: String,
    flag: Boolean,
    member_id: Number,
    product_id: Number
});

const memberStore = useMemberStore()
const productStore = useProductStore()

</script>

<template>
    <div
        @click="productStore.changeFlag(product_id, member_id)"
        :class="
            [flag ? 'card__check' : 'card__not-checked'] +
            ' card d-flex flex-column justify-content-center align-items-center'
        "
    >
        <BAvatar></BAvatar>
        <p>{{ label }}</p>
    </div>
</template>

<style lang='scss' scoped>
.card {
    padding: 2 * $ui-step;
    height: 100%;
    width: 20 * $ui-step;
    cursor: pointer;
}
.card__check {
    background: $hover-color;
    color: $text-color !important;
    transition-duration: 1000ms;
}
.card__not-checked {
    background: $second-color;
    transition-duration: 1000ms;
}
</style>