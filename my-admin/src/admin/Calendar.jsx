import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Title } from "react-admin";
import { Card, CardContent } from "@mui/material";

export const CalendarPage = () => {
  const events = [
    { title: "Sample Event", date: "2026-09-28" },
    { title: "Another Event", start: "2026-09-30T10:00:00", end: "2026-09-30T12:00:00" },
  ];

  return (
    <div>
      <Title title="Calendar" />
      <Card sx={{ mt: 1 }}>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listWeek",
            }}
            events={events}
            height="auto"
          />
        </CardContent>
      </Card>
    </div>
  );
};