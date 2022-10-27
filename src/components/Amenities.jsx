import { useState } from "react"
import { AmenitiesItem } from './AmenitiesItem'

import accommodation from "../assets/home/amenities/accommodation.svg" 
import responsobility from "../assets/home/amenities/responsobility.svg"
import security from "../assets/home/amenities/security.svg"

export const Amenities = () => {
    const [amenities, setAmenities] = useState(
        [
            {
                amenity: "Отзывчивость",
                amenityBody: "Поддержка работает 24/7",
                imageUrl: responsobility,
                maxWidth: 130
            },
            {
                amenity: "Удобство",
                amenityBody: "Удобный и практичный дизайн",
                imageUrl: accommodation,
                maxWidth: 230
            },
            {
                amenity: "Безопасность",
                amenityBody: "Все защищено",
                imageUrl: security,
                maxWidth: 220
            }
        ]
    )

   return (
      <div className="flex flex-wrap justify-between items-end py-10">
            {amenities.map(item => (
                <AmenitiesItem key={item.amenity} amenity={item.amenity} amenityBody={item.amenityBody} imageUrl={item.imageUrl} maxWidth={item.maxWidth} />
            ))}
       </div>
   ) 
}
