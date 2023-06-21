<script setup>
import { useMemberStore } from "../stores/MemberStore"

const memberStore = useMemberStore()

const props = defineProps({
    name: String,
    id: Number
})
</script>

<template>
    <div class="member-field d-flex align-items-center">
        <BAvatar class="avatar"></BAvatar>
        <BFormInput class="input" />
        <BButton pill class="button" @click="memberStore.deleteMember(id)">-</BButton>
    </div>
</template>

<style lang='scss' scoped>
.member-field {
    width: 100%;
    padding: 2*$ui-step;
    background: $second-color;
    border-radius: $small-border;
}
.form-control:focus {
    @include ui-border($additional-color);
}
.button {
    border-radius: 2px;
    margin-left: 2*$ui-step;
    cursor: pointer;
    background: $additional-color !important;
}
.input {
    margin-left: 2*$ui-step;
}
.avatar {
    background: $additional-color !important;
}
</style>