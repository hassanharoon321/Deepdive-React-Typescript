import { personProps } from "./person.types";

export const Person = (props:personProps) =>{
    return(
        <h2>{props.name.first} {props.name.last}</h2>
    )
}