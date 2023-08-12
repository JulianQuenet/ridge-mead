import { useSphere, useBox } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import usePlayerControls from "./controls";
import * as THREE from "three";
import { Flashlight } from "./Flash-lite_flashlight";


const BaseCharacter = (props: any) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 3;

  const { camera } = useThree();

  const [ref, api]: any = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [5,5,5],
    ...props,
  }));

  const [flashRef, flashApi]:any = useBox(()=>({
    mass: 1,
    type: "Dynamic",
    position: [5,5,5],
    args: [0.5,0.5,0.5],
    ...props,
  }))

  const { forward, backward, left, right, jump } = usePlayerControls();
  const velocity = useRef<any>([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v: any) => (velocity.current = v));
    camera.rotation.y = 0;
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.getWorldPosition(camera.position);
      camera.getWorldPosition(flashRef.current.position)
    }
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 4, velocity.current[2]);

  });

  return (
    <>
    <group>
      <mesh castShadow position={props.position} ref={ref}>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
    <Flashlight />
    </>
    
  );
};

export default BaseCharacter;
