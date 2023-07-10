import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", {
    state: () => ({
        homies: [
            /*
            {
                id: Number,
                name: String,
                cost: Number
            }
            */
        ],
    }),
    actions: {
        addNewMember() {    
            this.homies = [
                ...this.homies,
                { id: Date.now(), name: "" },
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
        },
        isEmpty() {
            return this.homies.reduce((accum, item) => {
                return accum *=(Object.keys(this.homies).length >= 2) * (item.name.replaceAll(' ', '') !== '')
            }, true)
        },
    },
})
