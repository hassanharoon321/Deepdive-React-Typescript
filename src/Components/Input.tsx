import React from "react"

type inputProps = {
    value: string;
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void // returns nothing
}

export const Input = (props:inputProps) => {
    return <input type="text" value={props.value} onChange={props.handleChange}/>
}