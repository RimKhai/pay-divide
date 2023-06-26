<script setup>
import { useProductStore } from "../stores/ProductStore"
import { ref } from "vue";

const productStore = useProductStore()
const name = ref("")
const cost = ref("")

const props = defineProps({
    id: Number
})
</script>

<template>
    <div class="product-field d-flex align-items-center">
        <BFormInput class="input" v-model="name" @input="productStore.addProductName(id, name)"/>
        <BFormInput class="input" v-model="cost" @input="productStore.addProductCost(id, cost)"/>
        <BButton pill class="button" @click="productStore.deleteProduct(id)">-</BButton>
    </div>
</template>

<style lang='scss' scoped>
.product-field {
    width: 100%;
    padding: 2*$ui-step;
    background: $second-color;
    border-radius: $small-border;
}
.form-control:focus {
    @include ui-border($additional-color);
}
.button {
    border-radius: 2px;
    margin-left: 2*$ui-step;
    cursor: pointer;
    background: $additional-color !important;
    &:hover {
        background: $hover-color !important;
    }
}
.input {
    margin-left: 2*$ui-step;
}
.avatar {
    background: $additional-color !important;
}
</style>