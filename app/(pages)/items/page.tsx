import ItemsList from "@/app/components/ItemList";
import { searchItems } from "../api/serviceItem";
import ErrorScreen from "@/app/components/error";

export default async function Items(context:any) {
    const itemsResult: any = await searchItems(context?.searchParams?.search);
    return (
        <main className="flex">
            {(!itemsResult.error?<ItemsList itemsList={itemsResult?.result}/>:<ErrorScreen data={itemsResult?.result}/>)}
        </main>
    )
}