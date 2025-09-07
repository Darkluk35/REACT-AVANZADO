import { useContext } from "react";
import ChatContext from "../context/ChatContext";

export default function History() {
  const { history } = useContext(ChatContext);

  return (
    <div className="flex-1 p-4 space-y-2 overflow-y-auto">
      {history.map((msg, i) => (
        <div
          key={i}
          className={`p-2 rounded max-w-[80%] ${
            msg.sender === "user"
              ? "bg-gray-200 ml-auto text-right"
              : "bg-green-200 mr-auto text-left"
          }`}
        >
          <strong>{msg.sender === "user" ? "Tú" : "IA"}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}
