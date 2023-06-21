import { defineStore } from "pinia"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        homies: [
            {   
                id: 0,
                name: 'Секретный Персонаж',
                cost: 15
            },
            {
                id: 1,
                name: 'Адиль',
                cost: 15
            },
            {   
                id: 2,
                name: 'Игорь',
                cost: 15
            }
        ]
    }),
    actions: {
        addNewProduct() {
            this.homies = [...this.homies, {id: Date.now(), name: "", cost: ""}]
        },
        deleteProduct(id) {
            this.homies = this.homies.filter(item => item.id !== id)
        },
        addProductName(id, name) {
            this.homies.map(item => {
                if(item.id === id) {
                    item.name = name
                }
            })
            console.log(this.homies)
        },
        addProductCost(id, cost) {
            this.homies.map(item => {
                if(item.id === id) {
                    item.cost = cost
                }
            })
            console.log(this.homies)
        }
    }
})