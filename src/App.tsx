import { SelectTicket } from "./components/SelectTicket";
import { Attendee } from "./components/Attendee";
import { TicketReady } from "./components/TicketReady";

function App(){
  return (
    <div>
      <SelectTicket/>
      <Attendee />
      <TicketReady />
    </div>
  )
}

export default App;