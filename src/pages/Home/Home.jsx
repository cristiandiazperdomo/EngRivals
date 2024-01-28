import {Header} from "../../components/UnloggedHeader/UnloggedHeader";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import {FeatureList} from "../../components/FeatureList/FeatureList";
import {Link} from "react-router-dom";

export function Home() {
    const handleCreateQuestions = () => {
        callOpenAiApi();
    };

    return (
        <>
            <div className="container mx-auto">
                <Link to="/groupchallenges">Go to the rooms</Link>
                <div className="mx-4">
                    <Header />
                    <HeroSection />
                    <FeatureList />
                </div>
            </div>
        </>
    );
}
