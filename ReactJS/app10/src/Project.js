import User3, { User1 } from "./Multiple/Task1";
import User6, { User4, User5 } from "./Multiple/Task2";
import User9, { User7, User8 } from "./Multiple/Task3";
import User12, { User10, User11 } from "./Multiple/Task4";
import User15, { User13, User14 } from "./Multiple/Task5";
import Data1 from "./Objectsincomponents/File1";
import Data2 from "./Objectsincomponents/File2";
import Data3 from "./Objectsincomponents/File3";
import Data4 from "./Objectsincomponents/File4";
import Data5 from "./Objectsincomponents/File5";

function User(){
    return(
        <div>
            <User3/>
            <User1/>
            <User6/>
            <User4/>
            <User5/>
            <User7/>
            <User9/>
            <User8/>
            <User10/>
            <User11/>
            <User12/>
            <User13/>
            <User14/>
            <User15/>
            <hr/>
            <Data1/>
            <Data2/>
            <Data3/>
            <Data4/>
            <Data5/>
        </div>
    )
}
export default User;