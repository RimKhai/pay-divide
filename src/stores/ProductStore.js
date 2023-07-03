import { defineStore } from "pinia"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            /* 
            {
                id: Number,
                name: String,
                cost: Number,
                flags: {
                    Number : Boolean
                },
                whoPays: Number
            }
            */
            {
                id: 1,
                name: "String",
                cost: 10,
                flags: {
                    "All" : true,
                    1 : true,
                    2 : true,
                    3 : true
                },
                whoPays: 1
            },
            {
                id: 2,
                name: "Cucumber",
                cost: 100,
                flags: {
                    "All" : true,
                    1 : true,
                    2 : true,
                    3 : true
                },
                whoPays: 2
            },
            {
                id: 3,
                name: "Pomo",
                cost: 1000,
                flags: {
                    "All" : true,
                    1 : true,
                    2 : true,
                    3 : true,
                },
                whoPays: 2
            }
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
                {
                    id: Date.now(),
                    name: "",
                    cost: "",
                    flags: {},
                    whoPays: "",
                },
            ]
            this.products.at(-1).flags = {
                ...this.products.at(-1).flags,
                ...obj,
            }
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
        },
        addProductCost(id, cost) {
            this.products.map((item) => {
                if (item.id === id) {
                    item.cost = cost
                }
            })
        },
        changeFlag(product_id, member_id) {
            if (member_id === "All") {
                this.products.map((item) => {
                    if (item.id === product_id) {
                        item.flags["All"] = !item.flags["All"]
                        Object.keys(item.flags).map((id) => {
                            item.flags[id] = item.flags["All"]
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
        getTotalCost() {
            return this.products.reduce(
                (accum, item) => (accum += Number(item.cost)),
                0
            )
        },
        getCosts() {
            let obj = {}
            this.products.map(item => {
                obj[item.whoPays] = 0
            })
            this.products.map(item => {
                obj[item.whoPays] += item.cost
            })
            console.log(obj)
            return obj
        },
        isEmpty() {
            return this.products.reduce((accum, item) => {
                return (accum *=
                    Object.values(item.flags).reduce(
                        (accum, flag) => (accum += flag),
                        false
                    ) *
                    (item.whoPays != "") *
                    (item.name.replaceAll(" ", "") !== "") *
                    (Boolean(Number(String(item.cost).replaceAll(0, ""))) != 0))
            }, true)
        },
        onPayerSelect(selected_id, product_index) {
            this.products[product_index].whoPays = selected_id
        },
    },
})
