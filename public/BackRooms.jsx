/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 backRooms.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/backRooms.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.61, 0.111, 55.092]} rotation={[-Math.PI / 2, 0, -0.006]} scale={[0.005, 0.004, 0.005]}>
        <group position={[0, 0.003, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1000, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.defaultMaterial002.geometry} material={materials.cl_body_mat} rotation={[0, 0, -0.149]} />
          </group>
          <group position={[100, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.defaultMaterial001.geometry} material={materials.cl_body_mat} rotation={[0, 0, -0.138]} />
          </group>
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials.cl_body_mat} position={[-460, 66.507, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.cl_body_mat} position={[600, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
      <group position={[-5.669, 1.976, 42.462]} rotation={[Math.PI, -1.563, Math.PI]} scale={[2.319, 1.849, 2.073]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.Pillars} position={[0, 0.012, 0]} />
      </group>
      <mesh geometry={nodes['F-material021'].geometry} material={materials.walls} position={[-2.487, 2.099, 50.2]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[2, 1, 0.961]} />
      <mesh geometry={nodes['F-material022'].geometry} material={materials.walls} position={[-9.01, 2.099, 29.268]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['F-material023'].geometry} material={materials.walls} position={[5.064, 2.099, 45.587]} rotation={[0, 1.567, 1.571]} scale={[2, 1, 0.512]} />
      <mesh geometry={nodes['F-material024'].geometry} material={materials.walls} position={[-13.571, 2.099, 56.478]} rotation={[0, 0, Math.PI / 2]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['M-material016'].geometry} material={materials.board} position={[-12.188, 0.137, 50.221]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.124, 0.085, 0.166]} />
      <mesh geometry={nodes['F-material001'].geometry} material={materials.walls} position={[-13.591, 2.099, 45.497]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['M-material004'].geometry} material={materials.board} position={[-1.257, 2.199, 34.232]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.083, 0.166]} />
      <mesh geometry={nodes['F-material002'].geometry} material={materials.walls} position={[-4.875, 2.099, 32.206]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material003'].geometry} material={materials.walls} position={[-1.311, 2.099, 32.23]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material004'].geometry} material={materials.walls} position={[-1.65, 2.099, 31.731]} rotation={[Math.PI, -0.023, -Math.PI / 2]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material005'].geometry} material={materials.walls} position={[-1.751, 2.099, 42.688]} rotation={[Math.PI, -0.023, -Math.PI / 2]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material006'].geometry} material={materials.walls} position={[-4.825, 2.099, 28.687]} rotation={[Math.PI, 1.545, -Math.PI / 2]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material007'].geometry} material={materials.walls} position={[-11.317, 2.099, 24.966]} rotation={[0, 0, Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <mesh geometry={nodes['F-material008'].geometry} material={materials.walls} position={[-23.304, 2.099, 37.443]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 1.251, 0.512]} />
      <mesh geometry={nodes['F-material009'].geometry} material={materials.walls} position={[0.289, 2.099, 62.092]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <mesh geometry={nodes['F-material010'].geometry} material={materials.walls} position={[10.979, 2.099, 49.564]} rotation={[0, 1.567, 1.571]} scale={[2, 1.251, 0.512]} />
      <mesh geometry={nodes['F-material011'].geometry} material={materials.carpet} position={[0.289, 0.034, 66.579]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <group position={[-17.988, 3.862, 29.548]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.337, 2.693, 1]}>
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_1.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_2.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_3.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_4.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_5.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_6.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_7.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_8.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_9.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_10.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_11.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_12.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_13.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_14.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_15.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_16.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_17.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_18.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_19.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_20.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_21.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_22.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_23.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_24.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_25.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_26.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_27.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_28.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_29.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_30.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_31.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_32.geometry} material={materials['Material.034']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_33.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_34.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_35.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_36.geometry} material={materials['Material.038']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_37.geometry} material={materials['Material.039']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_38.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_39.geometry} material={materials['Material.041']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_40.geometry} material={materials['Material.042']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_41.geometry} material={materials['Material.043']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_42.geometry} material={materials['Material.044']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_43.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_44.geometry} material={materials['Material.046']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_45.geometry} material={materials['Material.047']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_46.geometry} material={materials['Material.048']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_47.geometry} material={materials['Material.049']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_48.geometry} material={materials['Material.050']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_49.geometry} material={materials['Material.051']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_50.geometry} material={materials['Material.052']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_51.geometry} material={materials['Material.053']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_52.geometry} material={materials['Material.054']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_53.geometry} material={materials['Material.055']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_54.geometry} material={materials['Material.056']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_55.geometry} material={materials['Material.057']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_56.geometry} material={materials['Material.058']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_57.geometry} material={materials['Material.059']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_58.geometry} material={materials['Material.060']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_59.geometry} material={materials['Material.061']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_60.geometry} material={materials['Material.062']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_61.geometry} material={materials['Material.063']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_62.geometry} material={materials['Material.064']} />
        <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0005_63.geometry} material={materials['Material.065']} />
      </group>
    </group>
  )
}

useGLTF.preload('/backRooms.glb')
