import PageBoard from "./components/PageBoard/PageBoard";
import Zagolovok from "./components/Zagolovok/Zagolovok";
import events from "./upcoming-events.json";




function App() {
 return <>
  <Zagolovok/>
  <PageBoard events={events} />;
  </>
}

export default App;