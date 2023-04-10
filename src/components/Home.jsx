import React from "react";
import Event from "./Event";

export default function Home() {
  return (
    <div id="home" className="my-14 px-3 md:px-10">
      <div className="text-center">
        <h2 className="font-poppins font-medium">
          To feature your Fest/Events on this page -{" "}
          <a
            href="https://www.instagram.com/_visshal_yadav/"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            reachout here.
          </a>
        </h2>
        <h1 className="font-signika text-xl mt-2">
          Last Updated: April 10, 2023
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Event
          imgUrl="https://www.upcomingfest.ml/pics/mokshansut.jpeg"
          name="Sample Event 1"
          location="Sample Location 1"
          organizer="Sample Organizer 1"
          datetime="April 10, 2022"
          instagramUrl="sampleUrl"
          registerUrl="sampleUrl"
        />
        <Event
          imgUrl="https://www.upcomingfest.ml/pics/mokshansut.jpeg"
          name="Sample Event 2"
          location="Sample Location 2"
          organizer="Sample Organizer 2"
          datetime="April 10, 2022"
          instagramUrl="sampleUrl"
          registerUrl="sampleUrl"
        />
      </div>
    </div>
  );
}
