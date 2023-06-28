import { defineStore } from "pinia"
import { useMemberStore } from "./MemberStore"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            {
                id: 0,
                name: "",
                cost: 15,
                flags: {
                    0: false,
                    1: true,
                    2: false,
                },
                whoPays: ""
            },
            {
                id: 1,
                name: "",
                cost: 15,
                flags: {
                    0: false,
                    1: true,
                    2: true,
                },
                whoPays: ""
            },
            {
                id: 2,
                name: "",
                cost: 15,
                flags: {
                    0: true,
                    1: true,
                    2: false,
                },
                whoPays: ""
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
                { id: Date.now(), name: "", cost: "", flags: {}, whoPays: "" },
            ]
            this.products.at(-1).flags = { ...this.products.at(-1).flags, ...obj }
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
            console.log(this.products)
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
        getTotalCost () {
             return this.products.reduce((accum, item) => accum += Number(item.cost), 0)
        },
        isEmpty() {
            return this.products.reduce((accum, item) => {
                return accum *= (item.name.replaceAll(' ', '') !== '') * (Number(String(item.cost).replaceAll(0, '')) !== 0)
            }, true)
        },
        onPayerSelect(selected_id, product_index) {
            this.products[product_index].whoPays = selected_id
            console.log(this.products)
        }
    },
})
