/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 maze.glb 
Author: victor.darras (https://sketchfab.com/victor.darras)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/maze-b1b79eaa6aaf47ad84b7645f1b9c36dd
Title: Maze
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

const Maze =(props:any)=> {
  const { nodes, materials, scene }:any = useGLTF('/maze.glb')
  

    useEffect(() => {
    scene.position.set(5, -0.85, 0);
    scene.rotation.set(-0, 0, 0)
    console.log(materials.palette )
    materials.palette.roughness = (0)
    materials.palette.flatShading = (0)
    materials.palette.envMapIntensity = (0.5)
    materials.palette.metalness = (0.5)
    materials.palette.side = (0)
    scene.traverse((object:any) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene, materials, nodes]);


  return (<primitive object={scene} />)
}

useGLTF.preload('/maze.glb')

export default Maze
