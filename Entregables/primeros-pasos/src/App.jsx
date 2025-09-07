import { ChatProvider } from "./context/ChatContext";
import ChatBox from "./components/ChatBox";
import History from "./components/History";

function App() {
  return (
    <ChatProvider>
      <div className="flex h-screen bg-gray-900 text-white">
        <History />
        <ChatBox />
      </div>
    </ChatProvider>
  );
}

export default App;
