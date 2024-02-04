import {useState, useEffect} from "react";
import {PhraseCard} from "../Cards/PhraseCard";
import {Textarea} from "../Textarea/Textarea";
import {OptionsList} from "./OptionsList";

export const Translate = ({currentQuestion, optionsList, title, options}) => {
    const [useButtons, setUseButtons] = useState(false);

    const [showEditType, setShowEditType] = useState(false);

    const handleEditTypeOfExercise = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/questionsN",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentQuestion),
                }
            );

            const data = await response.json();

            console.log(data);
            alert(data.typeOfExercise);
        } catch (error) {
            console.log(error);
        }

        setShowEditType(false);
    };

    return (
        <div className="w-full sm:w-[540px] flex flex-col justify-between mt-12 sm:-mt-20 md:-mt-44 ">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[540px]">
                        {showEditType && (
                            <div
                                className="p-12 bg-yellow-100 w-100"
                                style={{zIndex: 2001}}
                            >
                                <button
                                    className="bg-black text-white p-2 rounded-xl"
                                    onClick={handleEditTypeOfExercise}
                                >
                                    CONVERTIR EJERCICIO EN open question
                                </button>
                            </div>
                        )}
                        <button
                            className="bg-black text-white p-2 rounded-xl w-100 absolute left-20 top-20"
                            onClick={() => setShowEditType(!showEditType)}
                        >
                            EDITAR TIPO DE EJERCICIO
                        </button>
                        <PhraseCard
                            title={title}
                            instruction={
                                useButtons
                                    ? "Translate this phrase in to English"
                                    : "Choose the Right Option"
                            }
                        />
                        {useButtons ? (
                            <Textarea />
                        ) : (
                            <OptionsList
                                options={options}
                                optionsList={optionsList}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
