<script setup>
import MemberCard from "../shared/MemberCard.vue";
import { useMemberStore } from "../stores/MemberStore";

const memberStore = useMemberStore();
</script>

<template>
    <b-list-group class="d-flex flex-row my-2">
        <MemberCard :label="'Все'" />
        <div class="ms-1" v-for="member in memberStore.homies" :key="member.id">
            <MemberCard :label="member.name" />
        </div>
    </b-list-group>
</template>

<style lang='scss' scoped>
</style>