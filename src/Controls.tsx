import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  PointerLockControls,
  Capsule,
  PositionalAudio,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import usePlayerControls from "./components/inputs";
import * as THREE from "three";
import { Flashlight } from "./components/Flash-lite_flashlight";
import { buffer } from "three/examples/jsm/nodes/Nodes.js";

interface triggerProps{
  pic : any;
  writing : any;
  room : any;
  pillars : any;
  nurse: any;
  door: any;
  audio: any;
  bringBall: any;
}

const Controls = (props: triggerProps) => {
  const {pic, writing, room, pillars, nurse, door, audio, bringBall} = props

  const [canPlay, setCanPlay] = useState<any>(false);
  const [changeRoom, setChangeRoom] = useState<Boolean>(false)
  const [changePic, setChangePic] = useState<Boolean>(false)
  const [seePillars, setSeePillars] = useState<Boolean>(false)
  const [bringDoor, setBringDoor] = useState<Boolean>(false)
  const [changeAudio, setChangeAudio] = useState<Boolean>(false)
  const [soccer, setSoccer] = useState<Boolean>(false)
  const walking = "./sounds/footsteps.mp3"
  const backGround = "./sounds/deepSpace.mp3"
  const soundRef1 = useRef<any>();
  const soundRef2 = useRef<any>();
  const flashRef = useRef<any>();
  const lightRef1 = useRef<any>();
  const lightRef2 = useRef<any>();
  const lightRef3 = useRef<any>();
  const lightRef4 = useRef<any>();
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED = 4.175;
  const playerRef = useRef<any>();

  const { camera } = useThree();
  
  const { forward, backward, left, right } = usePlayerControls();
  useEffect(() => {
    camera.rotation.y = 14.125;
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  }, []);

  const listener = new THREE.AudioListener();

  useFrame(() => {
    const time = Date.now() * 0.0005;
    const timeWalking = Date.now() * 0.00095
    if (playerRef.current) {
      playerRef.current.lockRotations(true, true); //Locks rotation because of capsule body
      const position = playerRef.current.translation();
      // Setting camera position and creating walking/breathing affect
      camera.position.x = position.x;
      camera.position.z = position.z;
      if (right || left || forward || backward) {
        camera.position.y = position.y + Math.sin(timeWalking * 7.5) * 0.095 + 1.25;
        setCanPlay(true)
      } else {
        camera.position.y = position.y + Math.sin(time * 5) * 0.035 + 1.25;
        setCanPlay(false)
      }
      //Player movement base on camera direction/rotation
      frontVector.set(0, 0, Number(backward) - Number(forward));
      sideVector.set(Number(left) - Number(right), 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);

      playerRef.current.setLinvel(
        { x: direction.x, y: 0.0, z: direction.z },
        true
      );

      playerRef.current.setAdditionalMass(0.5);
      let x = position.x
      let z = position.z
      if(x < 3 && z > 37){
        writing(true)
        setChangePic(true)
      }
      if(x > 3 && z < 37 && changePic){
        pic(true)
        setChangeRoom(true)
      }
      if(x < 3 && z > 37 && changeRoom){
        room(true)
        setSeePillars(true)
      }
      if(x >10.5 && z < 28.5 && seePillars){
        pillars(true)
        setTimeout(()=>{
          nurse(true)
        }, 3500)
        setBringDoor(true)
      }
      if(z > 30 && bringDoor){
         door(true)
         setChangeAudio(true)
      }
      if(x < -9 && z > 56 && changeAudio){
         audio(true)
         nurse(false)
         setSoccer(true)
      }
      if(x > 0 && soccer){
        bringBall(true)
      }

    }
    camera.add(listener);
    setFlash();
    if(right){
      console.log(playerRef.current.translation())
    }
    
  });

  function setFlash() {
    const time = Date.now() * 0.0005;
    if (flashRef.current && camera) {
      // Update flashlight's position with offsets relative to camera
      flashRef.current.position.copy(camera.position);
      flashRef.current.position.y =
        camera.position.y -
        0.15 +
        Math.sin(time * 3.5) * 0.01 //Breathing affect
        flashRef.current.updateMatrix();
      //Setting up flashlight rotation
      flashRef.current.rotation.copy(camera.rotation);
      flashRef.current.translateZ(-0.35);
      flashRef.current.translateX(0.2);
    }
    if (lightRef4.current && flashRef.current) {
      //Light 1
      lightRef1.current.intensity = 2.5;
      lightRef1.current.angle = 0.95;
      lightRef1.current.distance = 25;
      lightRef1.current.decay = 2;
      lightRef1.current.penumbra = 0.8;
      flashRef.current.add(lightRef1.current);
      flashRef.current.add(lightRef1.current.target);
      lightRef1.current.target.position.z = -5;
      lightRef1.current.shadow.bias = 0.0001;
      //Light 2
      lightRef2.current.intensity = 65;
      lightRef2.current.angle = 0.35 + Math.sin(time * 950) * 0.0012;
      lightRef2.current.distance = 40;
      lightRef2.current.decay = 2.25;
      lightRef2.current.penumbra = 0.1;
      flashRef.current.add(lightRef2.current);
      flashRef.current.add(lightRef2.current.target);
      lightRef2.current.target.position.z = -3;
      lightRef2.current.shadow.bias = 0.0001;
      //Light 3
      lightRef3.current.intensity = 200;
      lightRef3.current.angle = 0.25;
      lightRef3.current.distance = 40;
      lightRef3.current.decay = 2.25;
      lightRef3.current.penumbra = 0.5;
      flashRef.current.add(lightRef3.current);
      flashRef.current.add(lightRef3.current.target);
      lightRef3.current.target.position.z = -3;
      lightRef3.current.shadow.bias = 0.0001;
      //Back Flash
      flashRef.current.add(lightRef4.current);
    }
    if(soundRef1.current){
      soundRef1.current.position.z = -1.25
      soundRef1.current.setBuffer(buffer)
      soundRef2.current.setBuffer(buffer)
    }
  }

  return (
    <>
      <spotLight position={[0, 0, -0.75]} ref={lightRef1} name="spotlight 1" />
      <spotLight position={[0, 0, -0.75]} ref={lightRef2} name="spotlight 2" />
      <spotLight
        position={[0, 0, -0.75]}
        castShadow
        ref={lightRef3}
        name="spotlight 3"
      />
      <pointLight
        intensity={0.125}
        position={[0, 0, -1]}
        ref={lightRef4}
        name="back flash"
      />
      <PointerLockControls />

      <RigidBody
        position={[13.25, 1.95, 34.47]}
        ref={playerRef}
        colliders={"ball"}
        args={[2, 2, 2]}
      >
        <Capsule castShadow args={[0.48, 0.4, 0.4]}>
          <meshStandardMaterial />
         { canPlay && <PositionalAudio
            autoplay
            ref={soundRef1}
            load={THREE.AudioLoader}
            url={walking}
          />
        }
        <PositionalAudio 
        autoplay
        load={THREE.AudioLoader}
        url={backGround}
        listener={listener}
        ref={soundRef2}
        />
        </Capsule>
      </RigidBody>

      <mesh position={[5, 3, -5]} ref={flashRef}>
        <Flashlight />
      </mesh>
    </>
  );
};

export default Controls;
