<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/ProductStore";

const productStore = useProductStore()

const selected = ref(null);
const props = defineProps({
    options: Array,
    product_index: Number,
})
// const emits = defineEmits(["onInput"])
// const onInput = () => {
//     emits["onInput"]
// }
</script>

<template>
    <div>
        <b-form-select
            @input="productStore.onPayerSelect(selected, product_index)"
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