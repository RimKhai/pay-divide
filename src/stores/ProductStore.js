import { defineStore } from "pinia"
import { useMemberStore } from "./MemberStore"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            {
                id: 0,
                name: "Секретный Персонаж",
                cost: 15,
                flags: {
                    0: false,
                    1: true,
                    2: false,
                },
            },
            {
                id: 1,
                name: "Адиль",
                cost: 15,
                flags: {
                    0: false,
                    1: true,
                    2: true,
                },
            },
            {
                id: 2,
                name: "Игорь",
                cost: 15,
                flags: {
                    0: true,
                    1: true,
                    2: false,
                },
            },
        ],
    }),
    actions: {
        addNewProduct(member_ids) {
            let obj = {}
            obj["All"] = false
            member_ids.map((member_id) => {
                obj[member_id] = false
            })
            this.products = [
                ...this.products,
                { id: Date.now(), name: "", cost: "", flags: {} },
            ]
            this.products.map((product) => {
                product.flags = { ...product.flags, ...obj }
            })
            console.log(this.products)
        },
        deleteProduct(id) {
            this.products = this.products.filter((item) => item.id !== id)
        },
        addProductName(id, name) {
            this.products.map((item) => {
                if (item.id === id) {
                    item.name = name
                }
            })
            console.log(this.products)
        },
        addProductCost(id, cost) {
            this.products.map((item) => {
                if (item.id === id) {
                    item.cost = cost
                }
            })
            console.log(this.homies)
        },
        changeFlag(product_id, member_id) {
            if (member_id === "All") {
                this.products.map(item => {
                    if (item.id === product_id) {
                        item.flags['All'] = !item.flags['All']
                        Object.keys(item.flags).map(id => {
                            item.flags[id] = item.flags['All']
                        })
                    }
                })
            } else {
                this.products.map((product) => {
                    if (product.id === product_id) {
                        product.flags[member_id] = !product.flags[member_id]
                    }
                })
            }
        },
    },
})
