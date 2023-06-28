<script setup>
import ProductField from "../entities/ProductField.vue";
import MemberGroupCards from "../entities/MemberGroupCards.vue";
import PaySelect from "../shared/paySelect.vue";
import { useProductStore } from "../stores/ProductStore";
import { useMemberStore } from "../stores/MemberStore";

const memberStore = useMemberStore();
const productStore = useProductStore();

const options = useMemberStore().homies.reduce(
    (accum, item) => {
        return [...accum, { value: item.id, text: item.name }];
    },
    [{ value: null, text: "Who Pays" }]
);
</script>

<template>
    <b-list-group class="list nav-tabs">
        <b-list-group-item
            v-for="(product, index) in productStore.products"
            class="products-item p-2 d-flex flex-column"
            :key="product.id"
        >
            <ProductField :id="product.id"></ProductField>
            <PaySelect :options="options" />
            <MemberGroupCards :product_index="index" :product_id="product.id" />
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.products-item {
    width: $ui-step * 160;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
    border-radius: $big-border !important;
}
.nav-tabs {
    flex-wrap: nowrap;
    white-space: nowrap;
    max-height: 100 * $ui-step;
    overflow: auto;
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}
</style>