import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { events } from "./utils/events";
import { useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [eventObj, setEventObj] = useState(events);
  return (
    <>
      <Navbar events={events} setEventObj={setEventObj} />
      <Home eventObj={eventObj} />
      <Footer />
    </>
  );
}