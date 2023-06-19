<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import AddButton from "../shared/AddButton.vue";
import MemberList from "../widgets/MemberList.vue";
</script>
<template>
    <BaseBlock>
        <AddButton>Добавить человека</AddButton>
        <MemberList />
    </BaseBlock>
</template>
<style lang='scss' scoped>
</style>