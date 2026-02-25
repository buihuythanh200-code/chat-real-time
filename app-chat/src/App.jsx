import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SidebarNav from "./components/SidebarNav";
import ConversationPanel from "./components/ConversationPanel";
import ChatArea from "./components/ChatArea";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarNav className="col-xl-1 " />
        <ConversationPanel className="col-xl-3" />
        <ChatArea className="col-xl-5" />
      </div>
    </div>
  );
}

export default App;
