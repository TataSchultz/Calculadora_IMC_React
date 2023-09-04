import Button from './Button'
import  './ImcTable.css'

// eslint-disable-next-line react/prop-types
export const ImcTable = ({data, }) => {
  return (
    <><div id="result-container">
      <p id="imc-number">Seu Imc: </p>
      <p id="imc-info">Situação atual: </p>
      <h3>Confira as classificaçoes: </h3>
      <div id="imc-table">
        <div className="table-header">
        <h4>IMC</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
        </div>
      </div>
      {data.map((item) => (
        <div className="table-data" key={item.info}>
          <p>{item.classification}</p>
          <p>{item.info}</p>
          <p>{item.obesity}</p>
        </div>
      ))}
    </div><Button id="back-btn" text="voltar"/></>
 

  )
}