import httpService from "./http.service";
import {TOrder} from "../store/types/order";

const orderEndPoint = "orders/"

export const orderService = {
    fetch: async () => {
        try {
            const {data} = await httpService.get(orderEndPoint)
            return data
        }catch (error) {
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    },
    create: async (id: string, payload: TOrder) => {
        try {
            const {data} = await httpService.put(orderEndPoint + id, payload)
            return data
        }catch (error) {
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    },
    update: async (id: string, payload: any) => {
        try {
            const {data} = await httpService.patch(orderEndPoint + id, payload)
            return data
        }catch (error) {
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    },
    remove: async (orderId: string) => {
        try {
            const {data} = await httpService.delete(orderEndPoint + orderId)
            return data
        }catch (error) {
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    }
}