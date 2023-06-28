import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", {
    state: () => ({
        homies: [
            {
                id: 0,
                name: "",
                cost: 15,
            },
            {
                id: 1,
                name: "",
                cost: 15,
            },
            {
                id: 2,
                name: "",
                cost: 15,
            },
        ],
    }),
    actions: {
        addNewMember() {
            this.homies = [
                ...this.homies,
                { id: Date.now(), name: "", cost: "" },
            ]
        },
        deleteMember(id) {
            this.homies = this.homies.filter((item) => item.id !== id)
        },
        addMemberName(id, name) {
            this.homies.map((item) => {
                if (item.id === id) {
                    item.name = name
                }
            })
            console.log(this.homies)
        },
        isEmpty() {
            return this.homies.reduce((accum, item) => {
                return accum *= (item.name !== '')
            }, true)
        }
    },
})
