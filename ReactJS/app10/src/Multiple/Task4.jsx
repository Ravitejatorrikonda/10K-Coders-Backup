export function User10(){
    return <div>
               <h3>function10</h3>
    </div>
}
export function User11(){
    return <h3>function11</h3>
}
export default function User12(){
    return <div>
        <h3>function12</h3>
        <User10/>
        <User11/>
    </div>
}