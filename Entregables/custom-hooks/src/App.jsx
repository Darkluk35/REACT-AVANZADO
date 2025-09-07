import { ChatProvider } from "./context/ChatContext";
import ChatBox from "./components/ChatBox";
import History from "./components/History";
import './App.css'

function App() {
 

  return (
    <>
      <ChatProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <h1 className="text-2xl font-bold p-4">Clon ChatGPT con Ollama + DevSeek</h1>
        <div className="flex-1 overflow-y-auto">
          <History />
        </div>
        <ChatBox />
      </div>
    </ChatProvider>
    </>
  )
}

export default App
