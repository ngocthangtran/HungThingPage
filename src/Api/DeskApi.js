const { database } = require("firebase/config")

const deskApi = {
    getTable: async (keyTabe) => {
        return await database.ref(`Tables/${keyTabe}`).get().then(res => {
            if (res.exists()) {
                return res.val()
            }
            return false
        })
    }
}

export default deskApi