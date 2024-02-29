import ItemsList from "@/app/components/ItemList";
import { searchItems } from "../api/serviceItem";
import ErrorScreen from "@/app/components/error";

/**
 * Renders a list of items based on the search query obtained from the context.
 * @module Items
 * @param {Object} context - The context object containing search parameters.
 * @param {Object} context.searchParams - The search parameters containing the search query.
 * @param {string} context.searchParams.search - The search query used to retrieve items.
 * @returns {JSX.Element} The rendered list of items or an error screen component.
 */

export default async function Items(context:any) {
    const itemsResult: any = await searchItems(context?.searchParams?.search);
    return (
        <main className="flex">
            {(!itemsResult.error?<ItemsList itemsList={itemsResult?.result}/>:<ErrorScreen data={itemsResult?.result}/>)}
        </main>
    )
}