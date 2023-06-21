<script setup>
import { useMemberStore } from "../stores/MemberStore"
import { ref } from "vue";

const memberStore = useMemberStore()
const name = ref("")

const props = defineProps({
    id: Number
})
// const emits = defineEmits(["onChange"])

// const onChange = () => {
//     emit("onChange")
// }
</script>

<template>
    <div class="member-field d-flex align-items-center">
        <BAvatar class="avatar"></BAvatar>
        <BFormInput class="input" v-model="name" @input="memberStore.addMemberName(id, name)"/>
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