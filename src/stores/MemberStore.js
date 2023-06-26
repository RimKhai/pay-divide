import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", {
    state: () => ({
        homies: [
            {
                id: 0,
                name: "Рим",
                cost: 15,
            },
            {
                id: 1,
                name: "Адиль",
                cost: 15,
            },
            {
                id: 2,
                name: "Игорь",
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
    },
})
