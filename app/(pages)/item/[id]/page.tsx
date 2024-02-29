import Item from "@/app/components/Item";
import { getItemById } from "../../api/serviceItem";
import ErrorScreen from "@/app/components/error";

/**
 * Renders the item details or an error screen based on the item ID obtained from the context.
 * @module Items
 * @param {Object} context - The context object containing search parameters.
 * @param {Object} context.searchParams - The search parameters containing the item ID.
 * @param {number} context.searchParams.id - The ID of the item to retrieve.
 * @returns {JSX.Element} The rendered item details or error screen component.
 */
export default async function Items(context:any) {
    const item: any = await getItemById(context?.searchParams?.id);
    return (
        <main className="flex">
          {(!item?.error?<Item item={item?.result?.data}/>:<ErrorScreen data={item?.result}/>)}
        </main>
    )
}