import { useState, Activity} from "react";
import { Orders } from "./orders";

export function App(){
    const [showOrders, setShowOrders] = useState(false);
    
    return(
        <div>
            <button onClick={() => setShowOrders(!showOrders)}>
                {showOrders ? "Hide Orders" : "Show Orders"}
            </button>
            <Activity mode={showOrders ? "visible" : "hidden"}>
                <Orders />
            </Activity>
            {showOrders && <Orders />}
        </div>
    )
}