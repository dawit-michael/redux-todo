import Input from "./components/input";
import MyTodos from "./components/my-todos";
import "./styles.css";
import "./styles/main.css";

export default function App() {
  return (
    <div className="App  flex flex-col h-screen justify-center items-center w-screen">
      {/* input box */}
      <Input />
      {/* todo lists */}
      <MyTodos />
      {/* done */}
    </div>
  );
}
