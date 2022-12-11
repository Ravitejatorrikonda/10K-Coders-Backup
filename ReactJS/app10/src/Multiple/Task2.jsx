export function User4(){
    return <div>
               <h3>This is function 4</h3>
    </div>
}
export function User5(){
    return <h3>This is a function 5</h3>
}
export default function User6(){
    return <div>
        <h3>This is a function 6</h3>
        <User5/>
        <User4/>
    </div>
}