const categories = ["SMALL TALK", "WORK", "GROCERIES", "TRAVEL"];
const level = ["A1", "A2", "B1", "B2", "C1", "C2"];

const createRequest = (category, level) => {
    return {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "Eres un profesor de inglés de la universidad de cambricreateRequestdge, devuelve un array de objetos siendo fiel al ejemplo, ya que así se espera la información cualquier otro texto romperá el código",
            },
            {
                role: "user",
                content: `20 frases en ingles con más de una palabra para un nivel ${level} en inglés, Devuelve un array con cada pregunta en forma de objeto tendra tres opciones. el array debe incluir una frase en español cada tanto no incluyas la traducción de cada frase en inglés como otra pregunta. Ten en cuenta un nivel ${level} dentro de la categoria ${category}
                    ejemplo,
                        [
                            {
                                "title": "How much?"},
                                "options": [ // marca la opción correcta con true
                                    {
                                        "name": "Eres de aquí", 
                                        "isCorrect": false
                                    },
                                    {
                                        "name": "Estare en ocupado",
                                        "isCorrect": false
                                    }, {
                                        "name": "¿Cuanto cuesta?",
                                        "isCorrect": true
                                    }
                                ]
                            }
                    ].
                    ¡Las frases de nivel ${level} no deben estar incompletas!, no debe existir texto entre "[]" ni indicando acciones de tipo completar aquí.
                `,
            },
        ],
    };
};
export const callOpenAiApi = async () => {
    getManual();

    return;
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
