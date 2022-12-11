import User3, { User1, User2 } from "./Multiple1/Task1";
import User6, { User4, User5 } from "./Multiple1/Task2";
import User7, { User8, User9 } from "./Multiple1/Task3";
import User11, { User10, User12 } from "./Multiple1/Task4";
import User15, { User13, User14 } from "./Multiple1/Task5";
import { Data1} from "./Objectsincomponents1/File1";
import {Data2} from "./Objectsincomponents1/File2";
import { Data3 } from "./Objectsincomponents1/File3";
import { Data4 } from "./Objectsincomponents1/File4";
import { Data5 } from "./Objectsincomponents1/File5";

// import User3 from "./Functionalcomponents5/Task1"
function user(){
    return(
        <div>
            <User1/>
            <User2/>
            <User3/>
            <User6/>
            <User4/>
            <User5/>
            <User7/>
            <User8/>
            <User9/>
            <User10/>
            <User11/>
            <User12/>
            <User13/>
            <User15/>
            <User14/>
            <Data1/>
            <Data2/>
            <Data3/>
            <Data4/>
            <Data5/>

            
            {/* <User3/> */}
        </div>
    )
}
export default user;