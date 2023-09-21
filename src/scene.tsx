
import { RigidBody } from "@react-three/rapier";
import { Backrooms } from "./components/BackRooms";
import { Nurse } from "./components/Nurse";
import { NurseHead } from "./components/NurseHead";
import { SideRoom } from "./components/SideRoom";


interface triggerProps{
  pic : Boolean;
  writing : Boolean;
  room : Boolean;
}



const Scene = (props:triggerProps) => {
  const {pic, writing, room} = props

  return (
    <>
      <RigidBody type="fixed" position={[5,0.2,0]} colliders="trimesh">
        <Backrooms pic={pic} writing={writing} room={room}/>
      </RigidBody>

      <RigidBody lockTranslations colliders="trimesh"> 
        <Nurse />  
      </RigidBody>

      <NurseHead />

     { !room &&  <RigidBody type="fixed" colliders="trimesh">
        <SideRoom writing ={writing}/>
      </RigidBody>}
      
    </>
  );
};

export default Scene;
