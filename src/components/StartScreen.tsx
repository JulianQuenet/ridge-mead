

interface loadingProps{
    toggle: ()=> void
}

export const Loading = (props:loadingProps) => {
const {toggle} = props


  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <button className="start-button" onClick={toggle}>START</button>
      </div>
    </>
  );
};


