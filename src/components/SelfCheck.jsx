import { useState } from 'react'
import { selfCheck } from '../data/content.js'

const { options, questions, closingMessage } = selfCheck

export default function SelfCheck() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const question = questions[index]
  const revealed = selected !== null
  const isCorrect = revealed && selected === question.answer
  const isLast = index === questions.length - 1

  function choose(optionId) {
    if (revealed) return
    setSelected(optionId)
    if (optionId === question.answer) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }

  function restart() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  const ownerLabel = (id) => options.find((o) => o.id === id).label

  return (
    <section className="app-section" aria-labelledby="check-heading">
      <h2 id="check-heading" className="app-section__heading">
        Quick self-check: who's responsible?
      </h2>
      <p className="app-section__intro">
        Five quick questions to test the ownership split. There's no sign-in and nothing is saved.
      </p>

      <div className="app-check">
        {!done ? (
          <>
            <p className="app-check__progress">
              Question {index + 1} of {questions.length}
            </p>
            <p className="app-check__prompt">{question.prompt}</p>

            <div className="app-check__options" role="group" aria-label="Choose who is responsible">
              {options.map((opt) => {
                let state = ''
                if (revealed) {
                  if (opt.id === question.answer) state = ' is-correct'
                  else if (opt.id === selected) state = ' is-wrong'
                  else state = ' is-dim'
                }
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`app-check__option${state}`}
                    onClick={() => choose(opt.id)}
                    disabled={revealed}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>

            <div className="app-check__feedback" aria-live="polite">
              {revealed && (
                <div className={`app-check__result ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                  <p className="app-check__result-head">
                    <span className="material-icons" aria-hidden="true">
                      {isCorrect ? 'check_circle' : 'cancel'}
                    </span>
                    {isCorrect
                      ? 'Correct'
                      : `Not quite — this sits with the ${ownerLabel(question.answer)}.`}
                  </p>
                  <p className="app-check__explanation">{question.explanation}</p>
                  <button type="button" className="nsw-button nsw-button--dark" onClick={next}>
                    {isLast ? 'See results' : 'Next question'}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="app-check__done" aria-live="polite">
            <p className="app-check__score">
              You scored {score} of {questions.length}
            </p>
            <p className="app-check__closing">{closingMessage}</p>
            <button
              type="button"
              className="nsw-button nsw-button--white"
              onClick={restart}
            >
              Start again
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
