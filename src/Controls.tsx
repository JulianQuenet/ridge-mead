import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointerLockControls, Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Controls = () => {
  const controlsRef = useRef<any>();
  const bodyRef = useRef<any>()
  const isLocked = useRef(false);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  useFrame(() => {
    const velocity = 0.05;
    if (moveForward) {
      controlsRef.current.moveForward(velocity);
    } else if (moveLeft) {
      controlsRef.current.moveRight(-velocity);
    } else if (moveBackward) {
      controlsRef.current.moveForward(-velocity);
    } else if (moveRight) {
      controlsRef.current.moveRight(velocity);
    }

    let x = controlsRef.current.camera.position.x
    const z = controlsRef.current.camera.position.z
 
    
   
  });

  const onKeyDown = function (event:any) {
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
            console.log("lock");
            isLocked.current = true;
          });
          controlsRef.current.addEventListener("unlock", () => {
            console.log("unlock");
            isLocked.current = false;
          });
        }
      }}
      ref={controlsRef}
    />
    
    <RigidBody type="dynamic" position={[0,2,3]}>
      <Box  ref={bodyRef} castShadow >
        <meshStandardMaterial color="green"/>
      </Box>
    </RigidBody>
   </> 
  );
};

export default Controls;