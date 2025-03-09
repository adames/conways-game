import {useState, useEffect, useRef} from 'react';
import Grid from './Grid';
import Controls from './Controls';

const Game = () => {
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = useRef(null);

  const handleClick = () => {
    console.log('handle Game click')
    setIsRunning(isRunning => !isRunning)
  }

  const updateGrid = () => {
    console.log("updating grid")
  }

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        updateGrid();
      }, 100);
    }
    return () => {
      clearInterval(intervalId.current);
      intervalId.current = null;
    };
  }, [isRunning]);

  return (
    <div className="Game">
        <Grid />
        <Controls props={{handleClick, isRunning}}/>
    </div>
  )
};

export default Game;