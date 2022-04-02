import httpService from "./http.service";
import {TProduct} from "../types";

const goodsEndPoint = "goods/"

export const goodsService = {
    fetch: async () => {
        try {
            const {data} = await httpService.get(goodsEndPoint)
            return data
        }catch (error) {
            /*const errorObject = {
                message: "Что-то пошло не так. Попробуйте позже"
            }*/
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    },
    remove: async (idItem: string) => {
        try {
            const {data} = await httpService.delete(goodsEndPoint + idItem)
            return data
        }catch (error) {
            const errorObject = "Что-то пошло не так. Попробуйте позже"
            throw errorObject
        }
    },
    update: async (payload: TProduct) => {
        const {data} = await httpService.put(goodsEndPoint + payload.id, payload)
        return data
    },
    updateInStock: async (itemId: string, payload: number) => {
        const {data} = await httpService.patch(goodsEndPoint + itemId, {inStock: payload})
        return data
    }
}