import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
         height="100vh"
         projectID="47525b65-ff8d-40dc-a6e2-ef6235bbb92d"
         userName="roshni_18"
         userSecret="123123"
         renderChatFeed={(chatAppProps) => <ChatFeed{ ...chatAppProps}
        
        />
    ); 
    
}
export default App; 
