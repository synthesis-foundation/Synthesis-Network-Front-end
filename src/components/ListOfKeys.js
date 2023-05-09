import { useState } from "react"
import { Key } from "./Key";

export const ListOfKeys = () => {
    let [keys, setKeys] = useState([]);
    let keysElements = keys.map((key, index) => 
        <Key num={index}/>
    );

    return (
        <div>
            {keysElements}
            <Key num={0}/>
        </div>
    )
}