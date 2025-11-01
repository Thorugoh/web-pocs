import {useEffect, useEffectEvent, useState} from "react";
import { simulateApiCall } from "../api";

export default function App() {
    const [someState, setSomeState] = useState(0);

    const handleEffectEvent = useEffectEvent(() => {
        simulateApiCall(someState).then((result) => {
            setSomeState(result + 1);
        });
    });

    useEffect(() => {
        handleEffectEvent();
    }, []);

    return <div>Use Effect Event Demo</div>;
}