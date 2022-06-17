// API
// Input
// Button
// 
import { getPDV, getProductPDV } from '../../api/Api'
import { useState, memo, useCallback, useEffect} from 'react'
import Panel from './components/Panel'

function Main(){



    const [data, setData] = useState({})
    const [cep, setCep] = useState(31660250)

    const getPDVData = useCallback((cep)=>{
        getPDV(cep)
        .then((data) => setData(data))
    },[])

    useEffect(()=>{
        getPDVData(cep)
    }, [cep, getPDVData])

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
                getPDVData={getPDVData}
            />
        </div>
    )
}

export default memo(Main)

