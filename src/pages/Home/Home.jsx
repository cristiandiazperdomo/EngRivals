import {Header} from "../../components/UnloggedHeader/UnloggedHeader";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import {FeatureList} from "../../components/FeatureList/FeatureList";
import {Link} from "react-router-dom";
import {callOpenAiApi} from "../../hooks/getQuestionsFromChatGPT";

export function Home() {
    const handleCreateQuestions = () => {
        callOpenAiApi();
    };

    return (
        <>
            <div className="container mx-auto">
                <button
                    className="bg-black p-6 text-white rounded-xl"
                    onClick={callOpenAiApi}
                >
                    Create questions
                </button>
                <div className="mx-4">
                    <Header />
                    <HeroSection />
                    <FeatureList />
                </div>
            </div>
        </>
    );
}
