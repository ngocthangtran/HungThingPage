import axiosCliend from "./AxiosCliend"

const loginApi = {
    login: (params) => {
        // console.log(params)
        return axiosCliend.post('/login', params).catch(err => {
            if (err.response) {
                // console.log(err.response)
                return {
                    status: err.response.status,
                    message: err.response.data.message
                }
            }
        })
    },
    check: () => {
        return axiosCliend.get('/login/check')

    }
}
export default loginApi