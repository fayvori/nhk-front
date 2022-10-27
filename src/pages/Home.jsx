import { MainFooter } from "../components/MainFooter";
import { MainHeader } from "../components/MainHeader";
import { HeroBanner } from "../components/HeroBanner";
import { Amenities } from "../components/Amenities"
import { WhyRentalService } from "../components/WhyRentalService"
import { CategoriesCarousel } from "../components/CategoriesCarousel"
import { Container } from "../components/Container" 

export const Home = () => {
    return (
        <>
            <MainHeader />
                <Container>
                    <HeroBanner />
                    <Amenities />
                    <CategoriesCarousel />
                    <WhyRentalService />
                </Container>
            <MainFooter />
        </>
    )
}
