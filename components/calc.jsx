import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [total, setTotal] = useState('')

  const executeMath = () => {
    let answer
    switch (operator) {
      case '+':
        answer = parseFloat(num1) + parseFloat(num2)
        break
      case '-':
        answer = parseFloat(num1) - parseFloat(num2)
        break
      case '*':
        answer = parseFloat(num1) * parseFloat(num2)
        break
      case '/':
        answer = parseFloat(num1) / parseFloat(num2)
        break
      default:
        answer = 'Invalid Operands'
    }
    setTotal(Number(answer) ? answer : null)
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <form className="form">
        <input className="input" type="text" onChange={event => setNum1(event.target.value)} value={num1} />
        <select className="input" onChange={event => setOperator(event.target.value)} value={operator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input className="input" type="text" onChange={event => setNum2(event.target.value)} value={num2} />
        <input className="input" type="button" value="=" onClick={executeMath} />
        <input className="input" id="answer" value={total} />
      </form>
      <div className="nan">
        {(total === null) ? 'Please input a number value in the boxes' : null}
      </div>
    </div>
  )
}
