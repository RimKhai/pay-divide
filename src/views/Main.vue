<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import AddButton from "../shared/AddButton.vue";
import NextButton from "../shared/NextButton.vue"
import MemberList from "../widgets/MemberList.vue";
import { useMemberStore } from "../stores/MemberStore";

const memberStore = useMemberStore()

</script>
<template>
    <BaseBlock>
        <AddButton @onClick="memberStore.addNewMember()">Добавить человека</AddButton>
        <MemberList />
        <NextButton :isDisabled="!Boolean(memberStore.isEmpty()*Object.keys(memberStore.homies).length)" :routeName="'AddProductsView'" :label="'Дальше!'"/>
    </BaseBlock>
</template>
<style lang='scss' scoped>
</style>