
import { Sky, Stars } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import Scene from './scene';

import BaseCharacter from './player';

const BaseBox = ({ ...props }) => {
  const [ref]:any = useBox((index) => ({
    type: 'Static',
    mass: 1,
    ...props,
  }));

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

function App() {
  return (
    <Scene>
      <BaseBox text={false} position={[0, 0.5, 0]} args={[2, 1, 2]} color="red" />
      <BaseBox text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
      <BaseBox text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />
      <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
      <Stars/>
    </Scene>
  );
}

export default App;