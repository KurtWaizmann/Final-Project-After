import { createContext, useState } from "react";


export const QuestionContext = createContext(null);
export const QuestionProvider = ({ children }) => {
    const [answers, setAnswers] = useState(null)
    return (
        <QuestionContext.Provider value={{ answers, setAnswers }}>{children}</QuestionContext.Provider>
    )
}
