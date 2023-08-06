import { Rect } from 'react-konva';

const Home = () => {
  const windowWidth = Number(window.innerWidth);
  /*   const [playerPosition, setplayerPosition] = useState([0, 0]);
  const [enemyPosition, setEnemyPosition] = useState([1000, 500]);
  const [BulletPosition, setBulletPosition] = useState([
    playerPosition[0] + 50,
    playerPosition[1] + 25,
  ]); */
  // const [players, setPlayers] = useState([]);
  // const [enemies, setEnemies] = useState([]);
  // const [bullets, setBullets] = useState([]);
  // const windowWidth = Number(window.innerWidth);
  // const windowHeight = Number(window.innerHeight);

  // const updateplayers = async () => {
  //   const players = await apiClient.game.player.$get({
  //     body: {},
  //   });
  // };

  // const updatebullets = async () => {
  //   const bullets = await apiClient.game.bullet.$get({
  //     body: {},
  //   });
  // };

  /*   const updateplayerBullet = async () => {
    setBulletPosition((prev) => {
      if (prev[0] < windowWidth) {
        return [prev[0] + 10, prev[1]];
      } else {
        return prev;
      }
    });
  }; */

  // useEffect(() => {
  //   const fetchplayers = setInterval(updateplayers, 50);
  //   const fetchenemys = setInterval(updateenemies, 50);
  //   const fetchbullets = setInterval(updatebullets, 50);
  // });

  return (
    /*     let player = players.map((player) => {
    }) */
    <>
      <Rect x={0} y={0} width={windowWidth} height={windowWidth} fill="black" />

      {/*       <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          <Rect
            stroke="black"
            strokeWidth={1}
            x={0}
            y={0}
            width={windowWidth}
            height={windowHeight}
    
      <Rect x={playerPosition[0]} y={playerPosition[1]} width={50} height={50} fill="red" />
          <Rect x={enemyPosition[0]} y={enemyPosition[1]} width={50} height={50} fill="green" />
          <Circle x={BulletPosition[0]} y={BulletPosition[1]} radius={10} fill="blue" />
      </Layer>
      </Stage>
      ;  */}
    </>
  );
};

export default Home;
