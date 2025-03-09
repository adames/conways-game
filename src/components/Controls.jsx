import {useState} from 'react';

const Controls = () => {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div>
            <button onClick={() => setIsRunning(runningState => !runningState)}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}

export default Controls;
