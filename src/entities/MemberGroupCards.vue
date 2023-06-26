<script setup>
import MemberCard from "../shared/MemberCard.vue";
import { useMemberStore } from "../stores/MemberStore";
import { useProductStore } from "../stores/ProductStore";

const memberStore = useMemberStore();
const productStore = useProductStore();

const props = defineProps({
    product_id: Number,
    product_index: Number,
});
</script>

<template>
    <b-list-group class="d-flex flex-row my-2">
        <MemberCard
            :label="'Все'"
            :flag="productStore.products[product_index].flags['All']"
            :product_id="product_id"
            :member_id="'All'"
        />
        <div class="ms-1" v-for="member in memberStore.homies" :key="member.id">
            <MemberCard
                :label="member.name"
                :flag="productStore.products[product_index].flags[member.id]"
                :product_id="product_id"
                :member_id="member.id"
            />
        </div>
    </b-list-group>
</template>

<style lang='scss' scoped>
</style>