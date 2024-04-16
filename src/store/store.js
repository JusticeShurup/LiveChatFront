import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import $auth_api, { AUTH_API_URL } from "../http/auth_index";
import $api, { API_URL } from "../http/api_index";

export default class Store {
    user = {};
    userId = 0;
    isAuth = false;
    isLoading = true;
    
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUserId(id){
        this.userId = id
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    isA() {
        return this.isAuth;
    }

    async login(email, password) {
        this.setLoading(true);
        try {
            let response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            response = await $api.get(`${API_URL}/User/GetUser`);
            this.setAuth(true);
            this.setUser({id : response?.data?.id, firstName : response?.data?.firstName, lastName : response?.data?.lastName  });
            console.log(this.user.lastName);
        } catch (e) {
            console.log(e);
        }  finally {
            this.setLoading(false);
        }
    }

    async registration(email, password) {
        try {
            let response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            response = await $api.get(`${API_URL}/User/GetUser`);
            this.setAuth(true);
            this.setUser({id : response?.data?.id, firstName : response?.data?.firstName, lastName : response?.data?.lastName  });
            
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            window.location.href = "http://localhost:3000/chat"
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response)
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser();
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            window.location.href = "http://localhost:3000/";
        }
    }

    async refresh() {
        this.setLoading(true);
        try {
            let response = await $auth_api.post(`${AUTH_API_URL}/Refresh`)
            localStorage.setItem('token', response.data.accessToken);
            response = await $api.get(`${API_URL}/User/GetUser`);
            this.setAuth(true);
            this.setUser({id : response?.data?.id, firstName : response?.data?.firstName, lastName : response?.data?.lastName  });
        } catch (e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000));        
        try {
            if (localStorage.getItem("token")) {
                this.setAuth(true)
            }
        } catch (e) {
        } finally {
            this.setLoading(false);
        }
    }
}
