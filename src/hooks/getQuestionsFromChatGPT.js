const categories = ["SMALL TALK", "WORK", "GROCERIES", "TRAVEL"];
const level = ["A1", "A2", "B1", "B2", "C1", "C2"];

const createRequest = (category, level) => {
    return {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `Eres un profesor de inglés de la universidad de cambridge, devuelve un array de objetos siendo fiel al ejemplo y la dificultad propuesta por nivel ${level}, ya que así se espera la información cualquier otro texto romperá el código`,
            },
            {
                role: "user",
                content: `
                5 texto largos como title en inglés con más de una palabra para un nivel B1 de inglés, 
                    ejemplo,
                        [
                            {
                                "title": "On weekends, I spend time with friends, going to a cafe or watching a movie. I enjoy cooking and trying new recipes. Last month, I visited a museum, learning about local history. How do you spend your weekends?,
                                "options": [ // marca la opción correcta con true
                                    {
                                        "name": "new recipes",  // una parte del texto de title no mas de un 4 palabras, no agregas mas de 4 palabras
                                        "isCorrect": true
                                    }                                
                                ]
                                "typeOfExcercise": "long text"
                            }
                        ].
                    ¡Las frases de nivel B2 no deben estar incompletas!, no debe existir texto entre "[]" ni "..." ni indicando acciones de tipo completar aquí porque explotara el código.
                `,
            },
        ],
    };
};
export const callOpenAiApi = async () => {
    let levelsCounter = 0;
    let categoriesCounter = 0;

    const idInterval = setInterval(async () => {
        if (
            levelsCounter === level.length - 1 &&
            categoriesCounter === categories.length - 1
        )
            clearInterval(idInterval);

        const requestBody = createRequest(
            categories[categoriesCounter],
            level[levelsCounter]
        );

        try {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + API_KEY,
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json();

            const json = JSON.parse(data.choices[0].message.content);

            json.forEach((element) => {
                saveQuestionIntoDatabase({
                    title: element.title,
                    options: element.options,
                    typeOfExcercise: element.typeOfExcercise,
                    categoryEntity: {
                        id_category: categoriesCounter + 1,
                    },
                    englishLevel: {
                        idLevel: levelsCounter + 1,
                    },
                });
            });
            console.log(categories[categoriesCounter], level[levelsCounter]);
            console.log(json);
        } catch (error) {
            console.log(error);
        }

        if (categoriesCounter === categories.length - 1) {
            categoriesCounter = 0;
            levelsCounter++;
        } else {
            categoriesCounter++;
        }
    }, 21000);
};

const getManual = async () => {
    try {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + API_KEY,
                },
                body: JSON.stringify(createRequest("GROCERIES", "B2")),
            }
        );

        const data = await response.json();

        const json = JSON.parse(data.choices[0].message.content);

        json.forEach((element) => {
            saveQuestionIntoDatabase({
                title: element.title,
                options: element.options,
                typeOfExcercise: element.typeOfExcercise,
                categoryEntity: {
                    id_category: 3,
                },
                englishLevel: {
                    idLevel: 4,
                },
            });
        });
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

const saveQuestionIntoDatabase = async (data) => {
    try {
        const response = await fetch("http://localhost:8080/v1/api/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // console.log(await response.json());
    } catch (error) {
        console.log(error);
    }
};
