import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointerLockControls, Box, PerspectiveCamera } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Raycaster, Vector3 } from "three";

const Controls = () => {
  const controlsRef = useRef<any>();
  const bodyRef = useRef<any>();
  
  const targetRef = useRef<any>();
  const isLocked = useRef(false);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [wall, setWall] = useState(false)

  const rayCast = new Raycaster
  useFrame(() => {
    const velocity = 0.05;
    let x = controlsRef.current.camera.position.x
    let z = controlsRef.current.camera.position.z

    rayCast.setFromCamera(controlsRef.current.camera.position, controlsRef.current.camera);
    
    const hitWall = rayCast.intersectObject(targetRef.current)
    if(hitWall.length > 0 ){
      controlsRef.current.camera.position.x = x*0.1
      controlsRef.current.camera.position.z = z*0.1
    }
    
    if (moveForward) {
      controlsRef.current.moveForward(velocity);
    } else if (moveLeft) {
      controlsRef.current.moveRight(-velocity);
    } else if (moveBackward) {
      controlsRef.current.moveForward(-velocity);
      
    } else if (moveRight) {
      controlsRef.current.moveRight(velocity);
      
    }
    bodyRef.current.setTranslation({x:x,y:1.2,z:z},true)
  });
   
  
  const onKeyDown =  (event:any) =>{
    
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        setMoveForward(true);
        break;

      case "ArrowLeft":
      case "KeyA":
        setMoveLeft(true);
        
        break;

      case "ArrowDown":
      case "KeyS":
        setMoveBackward(true);
        
        break;

      case "ArrowRight":
      case "KeyD":
        setMoveRight(true);
        
        break;
      default:
        return;
    }
  };

  const onKeyUp = function (event:any) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        setMoveForward(false);
        break;

      case "ArrowLeft":
      case "KeyA":
        setMoveLeft(false);
        break;

      case "ArrowDown":
      case "KeyS":
        setMoveBackward(false);
        break;

      case "ArrowRight":
      case "KeyD":
        setMoveRight(false);
        break;

      default:
        return;
    }
  };

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  return (
    <>
        <PointerLockControls
      onUpdate={() => {
        if (controlsRef.current) {
          controlsRef.current.addEventListener("lock", () => {
            isLocked.current = true;
          });
          controlsRef.current.addEventListener("unlock", () => {
           
            isLocked.current = false;
          });
        }
      }}
      ref={controlsRef}
    />
    
    <RigidBody type="dynamic" ref={bodyRef} colliders={"ball"}>
      <Box castShadow >
        <meshStandardMaterial color="green"/>
      </Box>
    </RigidBody>

    

    <RigidBody type="fixed">
        <Box castShadow position={[0, 1, 0]} args={[5,5,10]} ref={targetRef}>
          <meshStandardMaterial color="darkslategrey" />
        </Box>
      </RigidBody>
   </> 
  );
};

export default Controls;
