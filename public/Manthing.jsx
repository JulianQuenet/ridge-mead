/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 manthing.glb 
Author: shedmon (https://sketchfab.com/shedmon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/manthing-afad51522f28489aa4ce7f50caf0cf66
Title: ManThing
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/manthing.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.096}>
          <group name="c31a3c0dade54384aac39eaa092444cefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
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
  )
}

useGLTF.preload('/manthing.glb')
