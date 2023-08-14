import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, Box, Capsule} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import usePlayerControls from "./components/controls";
import * as THREE from "three";
import { Flashlight } from "./components/Flash-lite_flashlight";

const Controls = () => {
  const flashRef = useRef<any>();
  const lightRef1 = useRef<any>();
  const lightRef2 = useRef<any>();
  const lightRef3 = useRef<any>();
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED = 4.175;
  const playerRef = useRef<any>();

  const {camera} = useThree()
 

  const { forward, backward, left, right } = usePlayerControls();
  useEffect(() => {
    camera.rotation.y = 0;
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  }, []);

  useFrame(() => {
    const time = Date.now() * 0.0005;
    if (playerRef.current) {
      playerRef.current.lockRotations(true, true); //Locks rotation because of capsule body
      const position = playerRef.current.translation();
      // Setting camera position and creating walking/breathing affect
      camera.position.x = position.x;
      if (right || left || forward || backward) {
        camera.position.y = position.y + Math.sin(time * 15) * 0.05 + 1;
      } else
        camera.position.y =
          position.y +
          Math.sin(time * 5 + camera.position.x + camera.position.z) * 0.05 +
          1;
      camera.position.z = position.z;

      //Player movement base on camera direction/rotation
      frontVector.set(0, 0, Number(backward) - Number(forward));
      sideVector.set(Number(left) - Number(right), 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);

      if (Math.ceil(playerRef.current.translation().y) > 1) {
        playerRef.current.setLinvel(
          { x: direction.x, y: -2.0, z: direction.z },
          true
        );
      } else {
        playerRef.current.setLinvel(
          { x: direction.x, y: 0.0, z: direction.z },
          true
        );
      }

      playerRef.current.setAdditionalMass(0.5);
    }
    setFlash();
  });

  function setFlash() {
    requestAnimationFrame(setFlash);
    const time = Date.now() * 0.0005;
    if (flashRef.current && camera) {
      // Update flashlight's position with offsets relative to camera
      flashRef.current.position.copy(camera.position);
      (flashRef.current.position.y =
        camera.position.y -
        0.2 +
        Math.sin(time * 3.5 + camera.position.x + camera.position.z) * 0.01), //Breathing affect
        flashRef.current.updateMatrix();
      //Setting up flashlight rotation
      flashRef.current.rotation.copy(camera.rotation);
      flashRef.current.translateZ(-0.45);
      flashRef.current.translateX(0.2);
    }
    if (lightRef1.current && flashRef.current) {
      //Light 1
      lightRef1.current.intensity = 20;
      lightRef1.current.angle = 1;
      lightRef1.current.distance = 4;
      lightRef1.current.decay = 2
      lightRef1.current.penumbra = 0.1;
      flashRef.current.add(lightRef1.current);
      flashRef.current.add(lightRef1.current.target);
      lightRef1.current.target.position.z = -15;
      lightRef1.current.target.position.y = -1.5;
      //Light 2
      lightRef2.current.intensity = 70;
      lightRef2.current.angle = 0.45 + Math.sin(time *300) * 0.0015
      lightRef2.current.distance = 35;
      lightRef2.current.decay = 2
      lightRef2.current.penumbra = 0.1;
      flashRef.current.add(lightRef2.current);
      flashRef.current.add(lightRef2.current.target);
      lightRef2.current.target.position.z = -8;
      lightRef2.current.target.position.y = -1.25;
      //Light 3
      lightRef3.current.intensity = 30;
      lightRef3.current.angle = 0.4 + Math.sin(time *300) * 0.001
      lightRef3.current.distance = 45;
      lightRef3.current.decay = 2
      lightRef3.current.penumbra = 0.1;
      flashRef.current.add(lightRef3.current);
      flashRef.current.add(lightRef3.current.target);
      lightRef3.current.target.position.z = -8;
      lightRef3.current.target.position.y = -1.25;

    }
  }

  return (
    <>
      <spotLight ref={lightRef1} name="spotlight 1" />
      <spotLight ref={lightRef2} name="spotlight 2" color={"0xCCCCCC"}/>
      <spotLight ref={lightRef3} name="spotlight 3" color={"0xCCCCCC"}/>
      <PointerLockControls />

      <RigidBody
        position={[5, 3, 0]}
        type="dynamic"
        ref={playerRef}
        colliders={"trimesh"}
        args={[2, 2, 2]}
      >
        <Capsule castShadow receiveShadow>
          <meshStandardMaterial />
        </Capsule>
      </RigidBody>

      <RigidBody type="fixed">
        <Box castShadow position={[0, 1, 0]} args={[5, 5, 10]}>
          <meshStandardMaterial color="darkslategrey" />
        </Box>
      </RigidBody>

      <mesh position={[5, 3, -5]} ref={flashRef}>
        <Flashlight />
      </mesh>
    </>
  );
};

export default Controls;
