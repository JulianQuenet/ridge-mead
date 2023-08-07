import {
  Box,
  useKeyboardControls,
  PerspectiveCamera,
  FirstPersonControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Controls } from "./App";

const Scene = () => {
  const cube = useRef<any>();
  const meshRef = useRef<any>();
  const playerRef = useRef<any>();
  const [mouseCoords, setMouseCoords] = useState({ y: 0, x: 0 });

  const handleLook = (e: any) => {
    const { clientY, clientX } = e;
    let y = (clientY / window.innerHeight) * -2 + 1;
    let x = (clientX / window.innerWidth) * -2 + 1;

    const sensitivity = 2;
    x *= sensitivity;
    y *= sensitivity;
    setMouseCoords({ y, x });
  };

  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  useFrame((_state) => {
    const impulseAmount = 0.15;

    let xImpulse = 0;
    let zImpulse = 0;

    if (rightPressed) {
      xImpulse += impulseAmount;
    }
    if (leftPressed) {
      xImpulse -= impulseAmount;
    }

    if (forwardPressed) {
      zImpulse -= impulseAmount;
    }
    if (backPressed) {
      zImpulse += impulseAmount;
    }

    cube.current.applyImpulse({ x: xImpulse, y: 0, z: zImpulse });
    meshRef.current.rotation.y = mouseCoords.x;
    meshRef.current.rotation.x = mouseCoords.y;
  });

  window.addEventListener("mousemove", handleLook);

  return (
    <>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />

      <RigidBody ref={cube} type="dynamic">
        <PerspectiveCamera
          makeDefault
          fov={60}
          position={[0, 6, 3]}
          ref={meshRef}
        />
        <Box castShadow position={[0, 5, 0]}>
          <meshStandardMaterial color="darkslategrey" />
        </Box>
      </RigidBody>

      <RigidBody type="fixed" name="floor" friction={0.75}>
        <Box position={[0, 0, 0]} args={[100, 1, 100]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>
    </>
  );
};

export default Scene;
