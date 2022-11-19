import axios from "axios"
export const useHttp = () => {
    const allCarts = async () => {
        const req = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products?limit=5',
            responseType: 'stream'
        })

        return req
    }    
    return {allCarts}
}