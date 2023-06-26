<script setup>
import ProductField from "../entities/ProductField.vue";
import MemberGroupCards from "../entities/MemberGroupCards.vue";
import { useProductStore } from "../stores/ProductStore";
const productStore = useProductStore();
</script>

<template>
    <b-list-group class="list">
        <b-list-group-item
            v-for="(product, index) in productStore.products"
            class="products-item rounded-2 p-2 d-flex flex-column"
            :key="product.id"
        >
            <ProductField :id="product.id"></ProductField>
            <MemberGroupCards :product_index="index" :product_id="product.id"/>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.products-item {
    width: $ui-step * 160;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}
</style>