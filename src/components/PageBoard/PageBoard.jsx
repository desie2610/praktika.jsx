import Event from "../Event/Event";
import {List} from "./PageBoardStyle";

function PageBoard({events}) {
  return (
    <List>
      {events.map((item, index) => (
        <Event
          key={index}
          name={item.name}
          location={item.location}
          speaker={item.speaker}
          start={item.time.start}
          end={item.time.end}
        />
      ))}
    </List>
  );
}

export default PageBoard;