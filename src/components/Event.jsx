import React from "react";

export default function Event(props) {
  return (
    <div className="flex flex-col items-center mt-10 p-4 bg-gray-200 rounded-lg md:w-[48%]">
      <img src={props.imgUrl} alt="" className="w-full rounded-lg mb-2" />
      <h1 className="font-signika text-3xl mb-2">{props.name}</h1>
      <p className="font-firasans text-base text-gray-600">
        <span>📍 </span>
        {props.location}
      </p>
      <p className="font-firasans text-base text-gray-600">{props.organizer}</p>
      <p className="font-firasans text-base text-gray-600 mb-2">
        <span>Date: </span>
        {props.datetime}
      </p>
      {props.instagramUrl && (
        <a
          href={props.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="block bg-pink-800 text-white font-roboto font-bold py-1 w-36 text-center rounded mb-2"
        >
          Instagram Page
        </a>
      )}
      {props.registerUrl && (
        <a
          href={props.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="block bg-green-800 text-white font-roboto font-bold py-1 w-36 text-center rounded"
        >
          Registration Link
        </a>
      )}
    </div>
  );
}