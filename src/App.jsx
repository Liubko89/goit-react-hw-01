import "./App.css";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Profile
        image={"/src/img/ava.jpg"}
        name={"Libomyr Romanyshyn"}
        tag={"Lucky"}
        location={"Faro, Portugal"}
        stats={{ followers: 1000, views: 1500, likes: 750 }}
      ></Profile>
    </div>
  );
}

export default App;
