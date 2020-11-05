
import TUTORDOT from "../API_NO_TOKEN";

export interface API_LOGIN_BODY_DATA {
    email: string
    password: string
}

const API_LOGIN = async (bodyData: API_LOGIN_BODY_DATA) => await TUTORDOT.request('POST', 'user/signin', bodyData)

export default API_LOGIN