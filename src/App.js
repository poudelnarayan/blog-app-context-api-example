import "./App.css";
import { useContext } from "react";
import MessageContext from "./context/MessageContext";
function App() {
  const message = "Hello World";
  return (
    <div className="App">
      <MessageContext.Provider value={message}>
        <ComponentA />
      </MessageContext.Provider>
      <header className="App-header"></header>
    </div>
  );
}

export default App;

const ComponentA = () => {
  return (
    <div>
      <ComponentB />
    </div>
  );
};

const ComponentB = () => {
  const message = useContext(MessageContext);
  return (
    <div>
      <h1>Message: {message}</h1>
    </div>
  );
};
