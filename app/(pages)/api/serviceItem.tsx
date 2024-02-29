import api from "./api";

/**
 * Retrieves an item by its ID from the API.
 * @module getItemById
 * @param {number} id - The ID of the item to retrieve.
 * @returns {Promise<{ result: any, error: boolean }>} A promise resolving to an object with the result data and error status.
 */
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


/**
 * Searches for items based on a search query.
 * @module searchItems
 * @param {*} searchQuery - The search query for items.
 * @returns {Promise<{ result: any, error: boolean }>} A promise resolving to an object with the search result data and error status.
 */
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