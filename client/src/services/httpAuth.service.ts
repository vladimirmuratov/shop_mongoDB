import axios from "axios";
import {setTokens} from "./localStorage.service";
import userService from "./user.service";

export const httpAuth = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
})

async function createUser(data: any) {
    try {
        await userService.create(data)
    } catch (error) {
        console.log(error)
    }
}

export const httpAuthService = {
    signUp: async ({email, password, ...rest}: any) => {
        try {
            const {data} = await httpAuth.post(`accounts:signUp`, {
                email,
                password,
                returnSecureToken: true
            })
            await setTokens(data)
            await createUser({
                _id: data.localId,
                email,
                image: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`,
                ...rest
            })
            return data
        } catch (error: any) {
            const {code, message} = error.response.data.error;
            console.log(code, message);
            if (code === 400) {
                if (message === "EMAIL_EXISTS") {
                    /*const errorObject = {
                        email: "Пользователь с таким Email уже существует"
                    };*/
                    const errorObject = "Пользователь с таким Email уже существует"
                    throw errorObject;
                }
            }
        }
    },
    signIn: async ({email, password}: { email: string; password: string; }) => {
        try {
            const {data} = await httpAuth.post(`accounts:signInWithPassword`, {
                email,
                password,
                returnSecureToken: true
            })
            setTokens(data)
            return data
        } catch (error: any) {
            const {code, message} = error.response.data.error
            if (code === 400) {
                if (message === 'EMAIL_NOT_FOUND') {
                    /*const errorObject = {
                        message: "Email введен неверно"
                    }*/
                    const errorObject = "Email введен неверно"
                    throw errorObject
                }
                if (message === 'INVALID_PASSWORD') {
                    /*const errorObject = {
                        message: "Пароль введен неверно"
                    }*/
                    const errorObject = "Пароль введен неверно"
                    throw errorObject
                }
            }
        }

    }
}