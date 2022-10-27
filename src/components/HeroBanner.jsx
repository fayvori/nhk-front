import banner from '../assets/home/hero_banner.svg'
import { HeroInput } from "./utils/HeroInput"

export const HeroBanner = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-start'>
                <h1 className="text-3xl font-bold">Сервис <span className="text-primary-main">с безопасными сделками</span> аренды вещей</h1>
                <HeroInput />
            </div>

            <img src={banner} className="" />
        </div>
    )
}
