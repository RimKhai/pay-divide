<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import { useProductStore } from "../stores/ProductStore";
import { useMemberStore } from "../stores/MemberStore";
import { useResultStore } from "../stores/ResultsStore"

const productStore = useProductStore()
const memberStore = useMemberStore()
const resultStore = useResultStore()

resultStore.setResults(memberStore.homies, productStore.products)

console.log(memberStore.homies)
console.log(productStore.products)
</script>
<template>
    <BaseBlock>
        <div class="d-flex" v-for="result in resultStore.results" :key="result.id">
            <div>{{ result.name }}</div>
            <div>{{ result.loan }}</div>
        </div>
    </BaseBlock>
</template>
<style lang='scss' scoped>
</style>