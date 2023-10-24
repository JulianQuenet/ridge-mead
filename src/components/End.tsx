

export const EndScreen = () => {
  return (
    <>
      <div
        className="end-screen"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          color: "white"
        }}
      >
        <div className="end-text">
            <div style={{textAlign:"center"}}>Thanks for playing and a big thanks to the following artists/creators of the assets used</div>
            <ul>
                <li>Interogation room by denis_cliofas - https://sketchfab.com/3d-models/interogation-room-213c8cede7c846b2822b998b9726bec5</li>
                <li>Nurse of horror, I edited it a bit but the original is done by Sebastian Kansik - https://sketchfab.com/3d-models/nurse-of-horror-1ff4e40c27724291ae4d9cfd51c57239</li>
                <li>Glass doors by carlcapu9 - https://sketchfab.com/3d-models/glass-doors-e0ff1a543cb34979999d2fd87843203e</li>
                <li>Computer by sketchyBot - https://sketchfab.com/3d-models/old-computer-bf6636fcc0954752bc9ffb5cec581b7f</li>
                <li>Manthing by shedmon - https://sketchfab.com/3d-models/manthing-afad51522f28489aa4ce7f50caf0cf66</li>
                <li>Body bags by Red - https://sketchfab.com/3d-models/covered-dead-bodies-003c0710251d4ea795b716161e201746</li>
                <li>Back rooms by Huuxloc : I edited it a bit but the original model can be found here - https://sketchfab.com/3d-models/backrooms-with-baked-textures-74e9508c517e43b8b9dd71fd29f95f95</li>
                <li>Flash light by AndrewHunt95 - https://sketchfab.com/3d-models/flash-lite-flashlight-e20e52c7a0eb466086af727588839d48</li>
            </ul>
            <div style={{textAlign:"center"}}>There are other assets that I used such as the wooden crate, the monkey toy and soccer ball but I couldn't seem to find the original sources again, though to whomever made it a big thanks</div>
             </div>
      </div>
    </>
  );
};