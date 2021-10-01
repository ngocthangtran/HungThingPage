import { database } from "firebase/config";
import axiosCliend from "./AxiosCliend";

const MenuApi = {
    getCategory: async () => {
        const data = {
            food: await database.ref('food').once('value').then(data => {
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
    },
    getFood: async (data) => {
        const { classify, category, keyFood } = data;
        return await database.ref(`${classify}/${category}/${keyFood}`).get().then(data => data.val())
    },
    addFoodSerer: (data) => {
        return axiosCliend.post('/menu/addfood', data).catch(err => {
            const error = err.response
            if (error) {
                return {
                    status: error.status,
                    data: error.data.message
                }
            }
        })
    },
    addImage: (data, idFood) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axiosCliend.post(`/image/upload-multiple/${idFood}`, data, config).catch(err => {
            const error = err.response
            if (error) {
                return {
                    status: error.status,
                    data: error.data.message
                }
            }
        })
    },

    getCategoryServer: () => {
        return axiosCliend.get('/menu/category').catch(err => {
            const error = err.response
            if (error) {
                return []
            }
        });
    },
    getFoodCategoryServer: (category) => {
        return axiosCliend.get(`/menu/category/${category}`).catch(err => {
            const error = err.response
            if (error) {
                return []
            }
        });
    },
    getFoodForIdServer: (id) => {
        return axiosCliend.get(`menu/food/${id}`).catch(err => {
            const error = err.response
            if (error) {
                return {
                    status: error.status,
                    data: error.data.message
                }
            }
        })
    },
    deleteFoodServer: (id) => {
        return axiosCliend.delete(`menu/delete/${id}`).catch(err => {
            const error = err.response
            if (error) {
                return {
                    status: error.status,
                    data: error.data.message
                }
            }
        })
    }
}

export default MenuApi;