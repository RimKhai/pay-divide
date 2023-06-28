<script setup>
import { ref } from "vue";

const selected = ref(null);
const props = defineProps({
    options: Array
})
</script>

<template>
    <div>
        <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-3 form-select"
        ></b-form-select>
    </div>
</template>

<style lang='scss' scoped>
.form-select {
    width: 80 * $ui-step;
    &:focus {
        @include ui-border($hover-color);
        transition-duration: 500ms;
    }
}
</style>