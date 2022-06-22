import { React, memo } from 'react'

function Panel(data, cep, getProductPDVData, handleChange) {

  //  const { productName, description } = {data}

  const dados = [
    {
      productName: "batata",
      description: "descrição da batata"
    },
    {
      productName: "cebola",
      description: "descrição da cebola"
    },
    {
      productName: "leite em pó",
      description: "descrição da leite em pó"
    },
    {
      productName: "laranja",
      description: "descrição da laranja"
    }
  ]

  
  console.log({cep})

  const Lista = () => dados.map((value, index) => {
    return(
      <>
        <p>Produto: {value.productName} ({value.description})</p>
      </>
    )
    })
  

  return (
    <div>
        <h3>Informe o CEP</h3>
        <h3>Find Products By Seller</h3>
        <Lista/>
    </div>
  )
}

export default Panel