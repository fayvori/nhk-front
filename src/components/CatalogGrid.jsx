import { CatalogItem } from "./CatalogItem"
import { Button } from "@mui/material"

export const CatalogGrid = (props) => {
    return (
        <section className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {props.items.map(item => (
                        <CatalogItem key={item.id} imageUrl={item.avatar} title={item.title} price={item?.prices[0]?.values[0]?.value} />
                ))}
            </div>
        </section>
    )
}
