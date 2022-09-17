import "./styles.css";
import { useFetch } from "./utils";

export default function App() {
  const [status, fetchData] = useFetch();
  console.log(status);
  return (
    <div className="App">
      <button
        onClick={() => {
          fetchData("https://jsonplaceholder.typicode.com/todos/1");
        }}
      >
        Click
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
