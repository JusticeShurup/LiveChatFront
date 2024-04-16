import $auth_api from '../http/auth_index'

export default class AuthService {

    static async login(email, password) {
        return $auth_api.post("/Login", {email, password})
    }

    static async registration(email, password) {
        return $auth_api.post("/Registration", {email, password});
    }

    static async  logout () {
        return $auth_api.post("/Logout");
    }

    static async refresh() {
        return $auth_api.post("/Refresh");
    }
}