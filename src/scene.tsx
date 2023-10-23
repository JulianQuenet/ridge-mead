import { RigidBody } from "@react-three/rapier";
import { Backrooms } from "./components/BackRooms";
import { Nurse } from "./components/Nurse";
import { NurseHead } from "./components/NurseHead";
import { SideRoom } from "./components/SideRoom";
import { Walls } from "./components/WallsPillars";
import { Toy } from "./components/Old_toy";
import { Goul } from "./components/Manthing";


interface triggerProps{
  pic : Boolean;
  writing : Boolean;
  room : Boolean;
  support : Boolean;
  helper : Boolean;
  door: Boolean;
  audio: Boolean;
  soccer: Boolean;
  wall:Boolean;
}


const Scene = (props:triggerProps) => {
  const {pic, writing, room, support, helper, door, audio, soccer, wall} = props

  return (
    <>
      <RigidBody type="fixed" position={[5,0.2,0]} colliders="trimesh">
        <Backrooms pic={pic} door={door} audio={audio}/>
      </RigidBody>

     { helper &&  <RigidBody lockTranslations colliders="cuboid"> 
        <Nurse />  
      </RigidBody>}

      { helper && 
        <NurseHead />
        }

     { !room &&  <RigidBody type="fixed" colliders="trimesh">
        <SideRoom writing ={writing}/>
      </RigidBody>}
      
       
       <RigidBody><Toy soccer={soccer}/></RigidBody>
       
      <Walls room={room} support={support} soccer={soccer} wall={wall}/>

      { false && 
        <Goul/>
        }
    </>
  );
};

export default Scene;
