import Item from "@/app/components/Item";
import { getItemById } from "../../api/serviceItem";
import ErrorScreen from "@/app/components/error";

export default async function Items(context:any) {
    const item: any = await getItemById(context?.searchParams?.id);
    return (
        <main className="flex">
          {(!item?.error?<Item item={item?.result?.data}/>:<ErrorScreen data={item?.result}/>)}
        </main>
    )
}