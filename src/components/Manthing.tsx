/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 manthing.glb 
Author: shedmon (https://sketchfab.com/shedmon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/manthing-afad51522f28489aa4ce7f50caf0cf66
Title: ManThing
*/

import  { useEffect, useRef } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import * as THREE from "three";

export function Goul() {
  
  const group = useRef<any>()
  const goul = useRef<any>()
  const goulCollider = useRef<any>()
  const { nodes, materials, animations }:any = useGLTF('/manthing.glb')
  const { actions, names, mixer } = useAnimations(animations, group)
  const { camera } = useThree();
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();


useEffect(()=>{
 actions[names[0]]?.reset().fadeIn(0.5).play()
 mixer.timeScale = 0.65
 if(goul.current){
  console.log(goul.current)
 }
}, [])

useFrame(()=>{//Get the guide to look a the camera with each frame
  if(goulCollider.current){
    
  goul.current.lookAt(camera.position.x, 0, camera.position.z)

  frontVector.set(0, 0, 1);
      sideVector.set(0, 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(1.5)
        .applyEuler(camera.rotation);

        goulCollider.current.setLinvel(
          { x: direction.x, y: 0.0, z: direction.z },
          true
        );
      }
  
})


  return (
    <>
    <RigidBody ref={goulCollider} colliders='cuboid'> 
      <group name="Sketchfab_Scene">
      <group ref={goul} dispose={null} position={[-10,0.5, 40]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.1255}>
          <group name="c31a3c0dade54384aac39eaa092444cefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group ref={group} name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, 11.337, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3.303} />
                  <group name="Manthing" position={[0, 11.337, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3.303} />
                  <group name="Base_Human" rotation={[Math.PI / 2, 1.571, 0]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['02_-_Default']} skeleton={nodes.Object_7.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
    </>
    
  )
}

useGLTF.preload('/manthing.glb')
