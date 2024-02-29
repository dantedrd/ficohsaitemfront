import Item from "@/app/components/Item";
import { getItemById } from "../../api/serviceItem";

export default async function Items(context:any) {
    const item: any = await getItemById(context?.searchParams?.id);
    return (
        <main className="flex">
          {(item&&<Item item={item.data}/>)}
        </main>
    )
}