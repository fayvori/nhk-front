import { RENT_MEDIA_URL } from "../constants"

export const CatalogItem = (props) => {
    return (
        <div>
            <img src={RENT_MEDIA_URL+props.imageUrl} className="w-[255px] h-[340px] rounded-lg bg-[#D9D9D9]" />

            <div className="max-w-[260px]">
                <p>{props.title}</p>
                <p>{props.price} ₽ / день</p>
            </div>
        </div>
    )
}
