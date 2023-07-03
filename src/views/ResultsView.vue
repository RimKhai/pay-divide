<script setup>
import BaseBlock from "../shared/BaseBlock.vue";
import { useProductStore } from "../stores/ProductStore";
import { useMemberStore } from "../stores/MemberStore";
import { useResultStore } from "../stores/ResultsStore";

const productStore = useProductStore();
const memberStore = useMemberStore();
const resultStore = useResultStore();

resultStore.setResults(memberStore.homies, productStore.products);

console.log(memberStore.homies);
console.log(productStore.products);
</script>
<template>
    <BaseBlock>
        <h1 class="header">Кому - кто должен</h1>
        <div
            class="main-loans"
            v-for="result in resultStore.results"
            :key="result.id"
        >
            <div class="loans">
                {{ result.name }}
            </div>
            <div
                v-for="loan in Object.keys(result.loan)"
                :key="loan"
                v-if="Boolean(Object.keys(result.loan).length)"
            >
                <div class="debtor">
                    {{
                        memberStore.homies
                            .map((item) => {
                                if (item.id == loan) {
                                    return item.name;
                                }
                            })
                            .filter((item) => item !== undefined)
                            .at(0)
                    }}
                    должен/должна {{ result["loan"][loan] }} денег
                </div>
            </div>
            <div class="debtor" v-else>Ничего не должны</div>
        </div>
    </BaseBlock>
</template>
<style lang='scss' scoped>
.main-loans {
    background: $additional-color;
    border-radius: $small-border;
    padding: 5 * $ui-step;
    margin-top: 3 * $ui-step;
}
.loans {
    background: $hover-color;
    width: 160 * $ui-step;
    color: $text-color;
    border-radius: $small-border;
    font-size: 10 * $ui-step;
}
.debtor {
    background: $second-color;
    color: $background-color;
    margin-top: 2 * $ui-step;
    border-radius: $small-border;
    font-size: 7 * $ui-step;
}

.header {
}
</style>