
import { useState } from "react";

import Header from "./components/Header";
import ProjectIndicator from "./components/ProjectIndicator";
import VoicePanel from "./components/VoicePanel";
import ChatPanel from "./components/ChatPanel";

import "./App.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="app">
      <Header />
      <ProjectIndicator />
      <VoicePanel />

      <button
        type="button"
        className="chat-toggle"
        aria-expanded={isChatOpen}
        onClick={() => setIsChatOpen((previous) => !previous)}
      >
        {isChatOpen ? "Close Chat" : "Open Chat"}
      </button>

      {isChatOpen && <ChatPanel />}
    </main>
  );
}

export default App;
