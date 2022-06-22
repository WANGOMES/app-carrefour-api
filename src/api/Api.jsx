const pathPDV = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=`

const pathPROD = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=`

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getPDV(cep){
    return fetch(`${pathPDV}${cep}`, headers)
    .then((response)=>response.json())
}

function getProductPDV(pdv){
    return fetch(`${pathPROD}${pdv}`, headers)
    .then((response) => response.json())

}


export { 
    getPDV,
    getProductPDV
}