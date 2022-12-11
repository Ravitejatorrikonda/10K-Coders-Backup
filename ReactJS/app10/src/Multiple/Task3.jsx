export function User7(){
    return <div>
               <h3>function7</h3>
    </div>
}
export function User8(){
    return <h3>function8</h3>
}
export default function User9(){
    return <div>
        <h3>function9</h3>
        <User8/>
        <User7/>
    </div>
}