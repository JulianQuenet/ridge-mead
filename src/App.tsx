import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";

import { Loading } from "./components/StartScreen";
import { EndScreen } from "./components/End";
import { useState } from "react";

function App() {
  const [start, setStart] = useState<Boolean>(false);
  const [johnny, setJohnny] = useState<Boolean>(false);
  const [nothing, setNothing] = useState<Boolean>(false);
  const [integ, setInteg] = useState<Boolean>(false);
  const [pillars, setPillars] = useState<Boolean>(false);
  const [nurse, setNurse] = useState<Boolean>(false);
  const [door, setDoor] = useState<Boolean>(false);
  const [changeAudio, setChangeAudio] = useState<Boolean>(false);
  const [ soccer, setSoccer] = useState<Boolean>(false);
  const [wall, setWall] = useState<Boolean>(false);
  const [scream, setScream] = useState<Boolean>(false);
  const [ending, setEnding] = useState<Boolean>(false);
  const [ fin, setFin ] = useState<Boolean>(false);

  const handleStart = () => {
    setStart(true);
    setJohnny(false);
    setNothing(false);
    setInteg(false);
    setPillars(false);
    setNurse(false);
    setDoor(false);
    setChangeAudio(false);
    setSoccer(false)
    setWall(false)
    setScream(false)
    setEnding(false)
    setFin(false)
  };

  return (
    <>
      {(start && !fin) && (
        <>
          <Canvas shadows camera={{ fov: 50, position: [5, 3, 2] }}>
            {/* <ambientLight intensity={1}/> */}

            <color attach="background" args={["black"]} />
            <Physics>
              <Controls
                pic={setJohnny}
                writing={setNothing}
                room={setInteg}
                pillars={setPillars}
                nurse={setNurse}
                door={setDoor}
                audio={setChangeAudio}
                bringBall={setSoccer}
                wall={setWall}
                scream={setScream}
                ending={setEnding}
                fin={setFin}
              />
              <Scene
                door={door}
                helper={nurse}
                pic={johnny}
                writing={nothing}
                room={integ}
                support={pillars}
                audio={changeAudio}
                soccer={soccer}
                wall={wall}
                scream={scream}
                ending={ending}
              />
            </Physics>
          </Canvas>
          
        </>
      )}

      {!start && <Loading toggle={handleStart} />}
      {fin && <EndScreen/>}
    </>
  );
}

export default App;
