import { personProps } from "./person.types";

type personListProps = {
    nameList:personProps[]
}

export const PersonList = (props:personListProps) =>{
    return(
        <div>
            {props.nameList.map((name)=>{
                return(
                    <>
                        <h2>{name.name.first}</h2>
                        <h2>{name.name.last}</h2>
                    </>
                )
            })}
        </div>
    )
}