<script setup>
import ProductField from "../entities/ProductField.vue"
import { useProductStore } from "../stores/ProductStore";
const productStore = useProductStore();
</script>

<template>
    <b-list-group class="list">
        <b-list-group-item
            v-for="homie in productStore.homies"
            class="products-item rounded-2 p-2 d-flex justify-content-between align-items-center"
            :key="homie.id"
        >
            <ProductField :id="homie.id"></ProductField>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.products-item {
    width: $ui-step * 100;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}
</style>