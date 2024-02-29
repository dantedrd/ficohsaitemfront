import ItemsList from "@/app/components/ItemList";
import { searchItems } from "../api/serviceItem";

export default async function Items(context:any) {
    const itemsResult: any = await searchItems(context?.searchParams?.search);
    return (
        <main className="flex">
            {(itemsResult&&<ItemsList itemsList={itemsResult}/>)}
        </main>
    )
}