<script setup>
import MemberField from "../entities/MemberField.vue";
import { useMemberStore } from "../stores/MemberStore";
const memberStore = useMemberStore();
</script>

<template>
    <b-list-group class="list nav-tabs">
        <b-list-group-item
            v-for="homie in memberStore.homies"
            class="members-item rounded-2 p-2 d-flex justify-content-between align-items-center"
            :key="homie.id"
        >
            <MemberField :id="homie.id"></MemberField>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.members-item {
    width: $ui-step * 160;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
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