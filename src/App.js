import "./App.css";
// import { useState } from "react";

function App() {
  // let name = "Arjun";
  return (
    <div className="App">
      <Welcome
        name="Arjun"
        pic="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Welcome
        name="Arun"
        pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Welcome
        name="Barman"
        pic="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      {/* <h1>
        Hi, {name}🎉🎉 - {100 * 2} followers
      </h1> */}
    </div>
  );
}
function Welcome({ pic, name }) {
  // let name = "Barman";
  return (
    <div className="App">
      <img classname="user-pic" src={pic} alt={name}></img>
      <h1>
        Hi, {name}🎉🎉 - {100 * 2} followers
      </h1>
    </div>
  );
}
// function Welcome1(props) {
//   // let name = "Barman";
//   const { pic, name } = props;
//   return (
//     <div className="App">
//       <img classname="user-pic" src={pic} alt={name}></img>
//       <h1>
//         Hi, {props.name}🎉🎉 - {100 * 2} followers
//       </h1>
//     </div>
//   );
// }
// Component Declaration = View + Logic`
// function Welcome(props) {
//   const { pic, name } = props;
//   return (
//     <div>
//       <img className="user-pic" src={pic} alt={name} />
//       <h1>Hi, {name}🎉🎉</h1>
//     </div>
//   );
// }
// function counter() {
//   let [like, setLike] = useState(0);
//   return (
//     <div>
//       <button type="" onClick={() => setLike(like + 1)}>
//         👍Like
//       </button>
//     </div>
//   );
//   const likeStyle = {
//     color:"green"
//   };
// }
// function counter1() {
//   let [dislike, setdisLike] = useState(0);
//   return (
//     <div>
//       <button type="" onClick={() => setdisLike(dislike + 1)}>
//         👎disLike
//       </button>
//     </div>
//   );
//   const dislikeStyle = {
//     color: "red",
//   };
// }
export default App;
