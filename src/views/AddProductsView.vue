<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import AddButton from "../shared/AddButton.vue";
import NextButton from "../shared/NextButton.vue"
import ProductList from "../widgets/ProductList.vue"
import { ref } from "vue"
import { useProductStore } from "../stores/ProductStore";
import { useMemberStore } from "../stores/MemberStore"

const productStore = useProductStore()
const memberStore = useMemberStore()

const members_ids = memberStore.homies.reduce((accum, item) =>  [...accum, item.id], [])


</script>
<template>
    <BaseBlock>
        <AddButton @onClick="productStore.addNewProduct(members_ids)">Добавить позицию</AddButton>
        <ProductList />
        <div class="total-cost">
            <p>Промежуточный итог:</p>
            <p class="total-cost-value">
                {{ productStore.getTotalCost() }}
            </p>
        </div>
        <NextButton :isDisabled="!Boolean(productStore.isEmpty()*Object.keys(productStore.products).length)" :routeName="'AddProductsView'" :label="'К результатам!'"/>
    </BaseBlock>
</template>
<style lang='scss' scoped>
.total-cost {
    color: $text-color;
    background: $additional-color;
    margin-top: 3*$ui-step;
    margin-bottom: 3*$ui-step;
    width: 160*$ui-step;
    padding: 5*$ui-step;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: $big-border;
}
.total-cost-value {
    padding: $ui-step 4*$ui-step $ui-step 4*$ui-step;
    background: $second-color;
    border-radius: $small-border;
    color: black;
}
</style>