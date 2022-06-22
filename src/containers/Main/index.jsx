// API
// Input
// Button
// 
import { getPDV, getProductPDV } from '../../api/Api'
import { useState, memo, useCallback, useEffect} from 'react'
import Panel from './components/Panel'

function Main(){

    const [ data, setData ] = useState({})
    const [ cep, setCep ] = useState(31660250)
    const [ pdv, setPdv ] = useState("carrefourbr1056")

    const getProductPDVData = useCallback((cep, pdv)=>{
        getPDV(cep)
        .then((data2) => setData(data2))
        .then(
            getProductPDV(pdv)
            .then((data)=> setData(data))
        )
            
    },[])

    useEffect(()=>{
        getProductPDVData(cep)
    }, [cep, getProductPDVData])

    const handleChange = ({target}) =>{
        const cep = target.value
        setCep(cep)
    }
    return(
        //<ContainerStyled></ContainerStyled>
        <div className="mb-2">
            <Panel
                onChange={handleChange}
                data={data}
                cep={cep}
                getProductPDVData={getProductPDVData}
            />
        </div>
    )
}

export default memo(Main)

