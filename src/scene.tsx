
import { RigidBody } from "@react-three/rapier";
import { Backrooms } from "./components/BackRooms";
import { Nurse } from "./components/Nurse";
import { NurseHead } from "./components/NurseHead";
import { SideRoom } from "./components/SideRoom";
import { Walls } from "./components/WallsPillars";


interface triggerProps{
  pic : Boolean;
  writing : Boolean;
  room : Boolean;
  support : Boolean;
  helper : Boolean;
}



const Scene = (props:triggerProps) => {
  const {pic, writing, room, support, helper} = props

  return (
    <>
      <RigidBody type="fixed" position={[5,0.2,0]} colliders="trimesh">
        <Backrooms pic={pic}/>
      </RigidBody>

     { helper &&  <RigidBody lockTranslations colliders="trimesh"> 
        <Nurse />  
      </RigidBody>}

      { helper && 
        <NurseHead />
        }

     { !room &&  <RigidBody type="fixed" colliders="trimesh">
        <SideRoom writing ={writing}/>
      </RigidBody>}
      

      <Walls room={room} support={support}/>
    </>
  );
};

export default Scene;
