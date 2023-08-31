import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, Capsule} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import usePlayerControls from "./components/controls";
import * as THREE from "three";
import { Flashlight } from "./components/Flash-lite_flashlight";

const Controls = () => {
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
        camera.position.y = position.y + Math.sin(time * 15) * 0.065 + 1.25;
      } else camera.position.y = position.y + Math.sin(time * 5) * 0.025 + 1.25;
      camera.position.z = position.z;

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
    }
    
    setFlash();
    if(right){
      console.log(lightRef3.current)
    }
  });

  function setFlash() {
    const time = Date.now() * 0.0005;
    if (flashRef.current && camera) {
      // Update flashlight's position with offsets relative to camera
      flashRef.current.position.copy(camera.position);
      (flashRef.current.position.y =
        camera.position.y -
        0.15 +
        Math.sin(time * 3.5 + camera.position.x + camera.position.z) * 0.01), //Breathing affect
        flashRef.current.updateMatrix();
      //Setting up flashlight rotation
      flashRef.current.rotation.copy(camera.rotation);
      flashRef.current.translateZ(-0.35);
      flashRef.current.translateX(0.2);
    }
    if (lightRef4.current && flashRef.current) {
      //Light 1
      lightRef1.current.intensity = 20;
      lightRef1.current.angle = 0.95;
      lightRef1.current.distance = 7;
      lightRef1.current.decay = 2;
      lightRef1.current.penumbra = 0.8;
      flashRef.current.add(lightRef1.current);
      flashRef.current.add(lightRef1.current.target);
      lightRef1.current.target.position.z = -5;
      lightRef1.current.shadow.bias = 0.0001;
      //Light 2
      lightRef2.current.intensity = 40;
      lightRef2.current.angle = 0.35 + Math.sin(time * 950) * 0.0012;
      lightRef2.current.distance = 35;
      lightRef2.current.decay = 2;
      lightRef2.current.penumbra = 0.1;
      flashRef.current.add(lightRef2.current);
      flashRef.current.add(lightRef2.current.target);
      lightRef2.current.target.position.z = -3;
      lightRef2.current.shadow.bias = 0.0001;
      //Light 3
      lightRef3.current.intensity = 40;
      lightRef3.current.angle = 0.285;
      lightRef3.current.distance = 35;
      lightRef3.current.decay = 1;
      lightRef3.current.penumbra = 0.5;
      flashRef.current.add(lightRef3.current);
      flashRef.current.add(lightRef3.current.target);
      lightRef3.current.target.position.z = -3;
      lightRef3.current.shadow.bias = 0.0001;
      //Back Flash
      flashRef.current.add(lightRef4.current);
    }
  }

  return (
    <>
      <spotLight
        position={[0, 0, -0.75]}
        ref={lightRef1}
        name="spotlight 1"
      />
      <spotLight
        position={[0, 0, -0.75]}
        ref={lightRef2}
        name="spotlight 2"
      />
      <spotLight
        position={[0, 0, -0.75]}
        castShadow
        ref={lightRef3}
        name="spotlight 3"
      />
      <pointLight position={[0, 0, -0.75]} ref={lightRef4} name="back flash" />
      <PointerLockControls />

      <RigidBody
        position={[1.75, 1.85, 41.19]}
        ref={playerRef}
        colliders={"ball"}
        args={[2, 2, 2]}
      >
        <Capsule castShadow args={[0.48, 0.4, 0.4]}>
          <meshStandardMaterial />
        </Capsule>
      </RigidBody>

      <mesh position={[5, 3, -5]} ref={flashRef}>
        <Flashlight />
      </mesh>

      
      {/* <Box ref={testRef} position={[1.75, 1.85, 39.19]} >
      <meshStandardMaterial />
      </Box> */}
    </>
  );
};

export default Controls;
