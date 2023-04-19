import React from "react";
import { socialMedia, lastUpdate } from "../utils/events.js";
import notFoundIcon from "../assets/images/not_found.svg"

export default function Home(props) {
  return (
    <div className="py-14 px-3 md:px-10">
      <div className="text-center">
        <h2 className="font-poppins font-medium">
          To feature your Fest/Events on this page -{" "}
          <a
            href={socialMedia}
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            reachout here.
          </a>
        </h2>
        <h1 className="font-signika text-xl mt-2">
          Last Updated: {lastUpdate}
        </h1>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-between">
        {props.eventObj.length === 0 ? (
          <img src={notFoundIcon} alt="notFound" className="w-96 mx-auto"/>
        ) :
          props.eventObj.map((event, index) => (
            <div
              className="flex flex-col items-center mt-10 p-4 bg-gray-200 rounded-lg md:w-[48%] mb-7 md:mb-0"
              key={index}
            >
              <img
                src={event.imgUrl}
                alt=""
                className="w-full md:h-80 rounded-lg mb-4"
              />
              <h1 className="font-signika text-3xl mb-2">{event.name}</h1>
              <p className="font-firasans text-base text-gray-600">
                🌐 {event.location}
              </p>
              <p className="font-firasans text-base text-gray-600">
                {event.organizer}
              </p>
              <p className="font-firasans text-base text-gray-600 mb-2">
                Date: {event.datetime}
              </p>
              {event.instagramUrl && (
                <a
                  href={event.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-pink-800 text-white font-roboto font-bold py-1 w-36 text-center rounded mb-2"
                >
                  Instagram Page
                </a>
              )}
              {event.registerUrl && (
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-green-800 text-white font-roboto font-bold py-1 w-36 text-center rounded"
                >
                  Registration Link
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
