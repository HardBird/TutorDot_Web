import axios from 'axios'
import { ENDPOINT } from "../api/config/config"

type MethodType = 'get' | 'GET' | 'post' | 'POST'

interface RequestType {
    status: string
    data: any
    message: string
}

const API_NO_TOKEN = {
    request: async (method: MethodType, api: string, body?: object | undefined, formData?: any) => {

        let Authorization = 'not yet'

        try {
            console.log('ENDPOINT Info:', {
                ENDPOINT,
                method,
                Authorization,
                api,
                body,
                formData
            })

            return await axios({
                url: `${ENDPOINT}/${api}`,
                method,
                data: formData ? formData : body ? body : null,
                headers: {
                    "Content-Type": "application/json",
                }
            })

        } catch (error) {
            console.log(`${api}에서 에러가 발생했습니다.`, error)
            return false
        }

    }
}
export default API_NO_TOKEN