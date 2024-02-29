import api from "./api";

async function getItemById(id:number) {
    try {
        const response = await api.get(`api/v1/items/${id}`);
        return {
            result:response.data,
            error:false
        }; 
    } catch (error:any) {
        return {
            result: error.response.data,
            error:true
        }; 
    }
    
}

async function searchItems(searchQuery: any) {
    try {
        const response = await api.get(`api/v1/items/search?name=${searchQuery}&total=4`);
        return {
            result:response.data,
            error:false
        }; 
    } catch (error:any) {
        return {
            result: error.response.data,
            error:true
        }; 
    }
    
}

export  {getItemById,searchItems};