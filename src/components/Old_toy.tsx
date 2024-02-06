

import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'


interface toyProps{
  soccer: Boolean
  scream:Boolean
}

export function Toy(props:toyProps) {
  const {soccer, scream} = props
  const { nodes, materials }:any = useGLTF('/old_toy.glb')
  const monkeyHead = useRef<any>()
  const { camera } = useThree();



  useFrame(()=>{//Get the nurse head to look a the camera with each frame
    monkeyHead.current.lookAt(camera.position.x, camera.position.y, camera.position.z)
    
  })


  return (
    <group position={[-7.5, 0.275, 26]} dispose={null}>
    <group position={[-4.259, 0.338, -1.002]} rotation={[-Math.PI / 2, 0, -2.986]} scale={0.125}>
      <mesh ref={monkeyHead} geometry={nodes.head.geometry} material={materials.defaultMat} position={[0.241, 9.572, 1.854]} />
      <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.defaultMat} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.defaultMat} />
    </group>
    <group position={[-4.497, 0.998, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 28.25, 0]}>
        <mesh>
        { scream && <PositionalAudio autoplay loop={false} url={"./sounds/horror.mp3"} />}
        <mesh geometry={nodes.defaultMaterial001.geometry} material={materials.defaultMaterial} />
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material} />
        </mesh>
      </group>
    </group>
    { !soccer && <group position={[-4.929, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.25}>
      <mesh geometry={nodes.defaultMaterial002.geometry} material={materials['defaultMat.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>}
  </group>
  )
}

useGLTF.preload('/old_toy.glb')
