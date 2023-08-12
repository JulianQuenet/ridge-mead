import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, Box, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import usePlayerControls from "./components/controls";
import * as THREE from "three";
import { Flashlight } from "./components/Flash-lite_flashlight";

const Controls = (props: any) => {
  const flashRef = useRef<any>();
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED = 0.175;
  const playerRef = useRef<any>();

  const { camera } = useThree();

  const { forward, backward, left, right, jump } = usePlayerControls();
  const velocity = useRef<any>([0, 0, 0]);
  useEffect(() => {
    camera.rotation.y = 0;
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  }, []);

  useFrame(() => {
    if (playerRef.current) {
      const position = playerRef.current.translation();
      // Setting camera position
      camera.position.x = position.x;
      camera.position.y = position.y + 1;
      camera.position.z = position.z;
      // Update flashlight's position with offsets relative to camera
      flashRef.current.position.x = camera.position.x;
      flashRef.current.position.y = camera.position.y;
      flashRef.current.position.z = camera.position.z - 0.3;
      //Setting up flashlight rotation
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      flashRef.current.lookAt(
        camera.position.x + cameraDirection.x,
        camera.position.y + cameraDirection.y,
        camera.position.z + cameraDirection.z
      );

      frontVector.set(0, 0, Number(backward) - Number(forward));
      sideVector.set(Number(left) - Number(right), 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);

      playerRef.current.applyImpulse(
        { x: direction.x, y: velocity.current[1], z: direction.z },
        true
      );
      playerRef.current.setAdditionalMass(0.5);
      if (
        jump &&
        Math.abs(playerRef.current.translation().y.toFixed(2)) < 1.5
      ) {
        playerRef.current.applyImpulse(
          { x: velocity.current[0], y: 1, z: velocity.current[2] },
          true
        );
      }
    }
  });

  return (
    <>
      <PointerLockControls />

      <RigidBody
        position={[5, 3, 0]}
        type="dynamic"
        ref={playerRef}
        colliders={"trimesh"}
      >
        <Box castShadow>
          <meshStandardMaterial color="green" />
        </Box>
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
