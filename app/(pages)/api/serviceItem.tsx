import api from "./api";

async function getItemById(id:number) {
    try {
        const response = await api.get(`api/v1/items/${id}`);
        return response.data; 
    } catch (error) {
        console.log(error);
        return {};
    }
    
}

async function searchItems(searchQuery: any) {
    try {
        const response = await api.get(`api/v1/items/search?name=${searchQuery}&total=4`);
        return response.data; 
    } catch (error) {
        console.log(error);
        return {};
    }
    
}

export  {getItemById,searchItems};