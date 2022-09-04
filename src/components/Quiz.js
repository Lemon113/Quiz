import Question from "./Question"
import React from "react"
import { nanoid } from "nanoid"

function Quiz() {
    const [questions, setQuestions] = React.useState(() => [
        {id: nanoid(), q: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q2: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q3: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q4: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q5: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q6: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q6: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q6: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
        {id: nanoid(), q6: "q?", options: ["option1", "option2", "option3", "option4"], selected: ""},
    ])

    function onOptionClicked(questionId, optionId) {
        setQuestions(prevQuestions => {
            return prevQuestions.map(q => {
                if (q.id == questionId) {
                    return {
                        ...q,
                        selected: optionId
                    }
                } else {
                    return q;
                }
            })
        })
    }

    const qElements = questions.map(q => {
            return <Question selected={q.selected} key={q.id} value={q.q} options={q.options} optionClicked={option => onOptionClicked(q.id, option)}/>
        }
    )

    return (
        <main className="main-quiz">
            <div className="quiz">
                <h1>Quiz</h1>
                <br/>
                {qElements}
            </div>

            <button>Submit</button>
        </main>
    )
}

export default Quiz