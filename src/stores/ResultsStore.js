import { defineStore } from "pinia"

export const useResultStore = defineStore("resultStore", {
    state: () => ({
        results: [
        ],
    }),
    actions: {
        setResults(members_data, products_data) {
            this.results = [...this.results, ...members_data]
            this.results.map(member => member['loan'] = {})
            this.results.map(member => {
                products_data.map(product => {
                    if(member.id === product.whoPays) {
                        const flags_id = Object.keys(product.flags).filter(flag_id => {
                            if(product.flags[flag_id] === true && !(flag_id === "All") && !(flag_id == member.id)) {
                                return true
                            }
                        })
                        flags_id.map(flag_id => {
                            if (product.flags[flag_id] === true && flag_id !== "All" && flag_id != member.id) {
                                if(member['loan'][flag_id] === undefined) {
                                    member['loan'][flag_id] = product.cost/flags_id.length
                                } else {
                                    member['loan'][flag_id] = member['loan'][flag_id] + product.cost/flags_id.length
                                }   
                            }
                        })
                    }
                })
            })
        }
    },
})
