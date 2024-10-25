import {Header} from "../../components/UnloggedHeader/UnloggedHeader";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import {FeatureList} from "../../components/FeatureList/FeatureList";

export function Home() {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <Header />
                    <HeroSection />
                    <FeatureList />
                </div>
            </div>
        </>
    );
}
