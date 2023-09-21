import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";
import { Loader, Stars } from "@react-three/drei";
import {Loading} from "./components/StartScreen"
import { useState } from "react";


function App() {
 const [ start, setStart] = useState<Boolean>(false)
 const [ johnny, setJohnny] = useState<Boolean>(false)
 const [ nothing, setNothing] = useState<Boolean>(false)
 const [ integ, setInteg] =useState<Boolean>(false)

 const handleStart = ()=>{
  setStart(true)
  setJohnny(false)
  setNothing(false)
  setInteg(false)
 }



  return (
    <>
    { start &&
      <>
      <Canvas
      shadows
      camera={{ fov: 50, position:[5,3,2] }}
    >
      {/* <ambientLight intensity={1}/> */}

      <color attach="background" args={["black"]} />
      <Physics>
        <Controls pic={setJohnny} writing={setNothing} room={setInteg} />
        <Scene pic={johnny} writing={nothing} room={integ}/>
      </Physics>
      <Stars />
    </Canvas>
    <Loader />
    </>
      }

      { !start && <Loading toggle={handleStart}/>}
    </>
  );
}

export default App;