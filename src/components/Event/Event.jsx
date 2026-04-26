import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUser, FaClock } from "react-icons/fa";
import { format } from "date-fns";
import { Card, Title, Text } from "./EventStyle";

function Event({ name, location, speaker, start, end }) {
  const formatTime = (time) => {
    return format(new Date(time), "HH:mm");
  };

  const formatDate = (time) => {
    return format(new Date(time), "dd MMM yyyy");
  };

  return (
    <Card>
      <Title>{name}</Title>

      <Text>
        <FaMapMarkerAlt />
        {location}
      </Text>

      <Text>
        <FaUser />
        {speaker}
      </Text>

      <Text>
        <FaClock />
        {formatDate(start)} | {formatTime(start)} - {formatTime(end)}
      </Text>
    </Card>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;