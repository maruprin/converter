import React, { useState } from "react";
import styles from '../styles/styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faRightLeft } from '@fortawesome/free-solid-svg-icons'
import arraySelect from "../Data/info";
import {FaRegHeart} from "react-icons/fa";

const Conversor = () => {
    //console.log('me renderizo')
    const [from, setFrom] = useState(arraySelect[0].from);
    const [to, setTo] = useState(arraySelect[0].to);
    
    const optionChange = (i) => {
        setFrom(arraySelect[i].from);
        setTo(arraySelect[i].to);
    }

    const [result, setResult] = useState(0)
    
 
    const queDice = (quantity) =>{
            setResult(quantity)
    }

    const [itemSelect,setItemSelect] = useState("")
    
   const que = from == arraySelect[0].from && to == arraySelect[0].to? result * arraySelect[0].factor : from == arraySelect[1].from && to == arraySelect[1].to? result * arraySelect[1].factor : from == arraySelect[2].from && to == arraySelect[2].to? result * arraySelect[2].factor : from == arraySelect[3].from && to == arraySelect[3].to? result * arraySelect[3].factor : from == arraySelect[4].from && to == arraySelect[4].to? result * arraySelect[4].factor : from == arraySelect[5].from && to == arraySelect[5].to? result * arraySelect[5].factor : 'error';

console.log(que)
    

    return(
    <div className={styles.contenedorConversor}>
    <p className={styles.convert}>convert</p>
<select className={styles.selector} name="selectorConvertor" onChange={ (event) => optionChange(event.target.value)}>
    {arraySelect.map((o,i) => <option  value={i} key={i}>{o.name}</option>)
    }
    </select> 
    
   
<div className={styles.iconFlechas} ><FontAwesomeIcon icon={faRightLeft}/></div>
<hr/>
<input className={styles.inputCantidad} type="text" name="medida" onChange={(event)=>queDice(event.target.value)} placeholder="introduce cantidad a convertir"/>
<span className={styles.medidaInput}>{from}</span>
<hr className={styles.hr2} />
<div className={styles.iconHeart}><FontAwesomeIcon icon={faHeart}/></div>
<div className={styles.result}> {que.toFixed(2)} </div>
<span className={styles.medidaResult}>{to}</span>
</div>
    )
}

export default Conversor;