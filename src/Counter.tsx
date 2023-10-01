import {useState} from "react";


export default function Counter() {

    const [counter, setCounter] = useState<number>(0)


    function onButtonClick() {
        const newCounter = counter + 1

        setCounter(newCounter)
        console.log(newCounter)
    }

    return (
        <div>
            <button onClick={onButtonClick}>
                Increase
            </button>
            <h4>
                {/*{counter > 2 && "Counter:" + counter}*/}
                {counter === 5 ? "Counter ist 5!" : "Counter ist nicht 5!"}
            </h4>

        </div>
    )
}