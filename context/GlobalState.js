import React, { useState } from "react";
import { AppContext } from "./context";

function GlobalState(props) {
  const [appointments, setAppointments] = useState([]);
  const [profile, setProfile] = useState(null);

  const dispatchAppEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_PROFILE":
        setProfile(payload.profile);
        return;
      case "ADD_APPOINTMENTS":
        setAppointments(payload.appointments);
        return;
      case "REMOVE_APPOINTMENT":
        setAppointments(
          appointments.filter((appointment) => appointment.key !== payload.key)
        );
        return;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ appointments, profile, dispatchAppEvent }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default GlobalState;
