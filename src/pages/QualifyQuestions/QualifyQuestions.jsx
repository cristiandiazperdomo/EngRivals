import { useSelector } from "react-redux"

export const QualifyQuestions = () => {
    const [currentQuestion, setQuestion] = useState(undefined);

    const {id} = useParams();

    useEffect(() => {
        if (currentQuestion === undefined) {
        const getQuestion = async () => {
            try {
                const response = fetch("http://localhost:8080/api/v1/questions/" + id);
                const data = await response.json();
            } catch (error) {
                console.log(error);
            }

        }
            

            getQuestion();
        }
    }, []);

    useEffect(() => {
        if ((challenge !== undefined || challenge !== null) && !(challenge instanceof Promise)) {
            
        }
    }, [challenge]);
    
    return (
        {

            <div>
            <h1></h1>
            <ul className="mt-4 space-y-2" ref={optionsList}>
                {options?.map((option, index) => (
                    <QuizOptionButton
                    key={option.id}
                    optionId={option.id}
                    optionLetter={firstLetter[index]}
                    content={option.name}
                    />
                    ))}
            </ul>
            </div>
        }
    );
}