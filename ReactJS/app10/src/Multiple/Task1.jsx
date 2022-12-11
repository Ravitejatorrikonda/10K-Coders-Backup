export function User1(){
    return <div>
               <h3>This is multiple function</h3>
    </div>
}
export function User2(){
    return <h3>This is multiple function 2</h3>
}
export default function User3(){
    return <div>
        <h3>This is a function of 3</h3>
        <User1/>
        <User2/>
    </div>
}