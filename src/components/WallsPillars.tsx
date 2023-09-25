/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 wallsPillars.glb 
*/
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import { MeshStandardMaterial } from "three";

interface triggerProps {
  room: Boolean;
  support: Boolean;
}

export function Walls(props: triggerProps) {
  const { scene, nodes, materials }: any = useGLTF("/wallsPillars.glb");
  const { room, support } = props;

  useEffect(() => {
    for (const [keys, values] of Object.entries<MeshStandardMaterial>(
      materials
    )) {
      if (keys == "Pillars.003") {
        values.roughness = 0.75;
      }
    }
  }, [materials, nodes, scene]);

  return (
    <group dispose={null}>
      {support && (
        <RigidBody type="fixed" colliders={"trimesh"}>
          <group
            position={[-0.75, 2.0991, 42.462]}
            rotation={[Math.PI, -1.563, Math.PI]}
            scale={[2.319, 1.849, 2.073]}
          >
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials["Pillars.003"]}
              position={[0, 0.012, 0]}
            />
          </group>
        </RigidBody>
      )}

      <group
        position={[2.5, 2.099, 50.2]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[2, 1, 0.961]}
      >
        <RigidBody type="fixed" colliders={"trimesh"}>
          <mesh
            geometry={nodes["F-material052"].geometry}
            material={materials["walls.009"]}
          />
        </RigidBody>
        {/* <RigidBody type='fixed' colliders={"trimesh"}>
          <mesh geometry={nodes['F-material052_2'].geometry} material={materials['walls.010']} />
          </RigidBody>
        <mesh geometry={nodes['F-material052_1'].geometry} material={materials['board.003']} /> */}
      </group>

      {room && (
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes["F-material023"].geometry}
            material={materials["walls.009"]}
            position={[10, 2.099, 45.587]}
            rotation={[0, 1.567, 1.571]}
            scale={[2, 1, 0.512]}
          />
        </RigidBody>
      )}
    </group>
  );
}

useGLTF.preload("/wallsPillars.glb");
