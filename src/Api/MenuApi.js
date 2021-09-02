import { database } from "firebase/config";

const MenuApi = {
    getCategory: async () => {
        const data = {
            foods: await database.ref('food').once('value').then(data => {
                const key = []
                data.forEach((childSnapshot) => {
                    key.push(childSnapshot.key)
                });
                return key
            }),
            drinks: await database.ref('drinks').once('value').then(data => {
                const key = []
                data.forEach((childSnapshot) => {
                    key.push(childSnapshot.key)
                });
                return key
            })
        }
        return data;
    },
    getFoodCategory: async (data) => {
        const { classify, category } = data
        return await database.ref(`${classify}/${category}`).get().then(snapsort => {
            return snapsort.val();
        })
    }
}

export default MenuApi;