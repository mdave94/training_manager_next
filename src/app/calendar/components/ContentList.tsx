"use client";

import React, { useState, useEffect } from "react";
import { TrainingSession } from "@/app/data/TrainingSession";
import ContentElement from "./ContentElement";
import SessionPopup from "./SessionPopup";

type ContentListProps = {
  tasks: TrainingSession[];
};

const ContentList: React.FC<ContentListProps> = ({ tasks }) => {
  const [selectedSession, setSelectedSession] =
    useState<TrainingSession | null>(null);
  const [randomTexts, setRandomTexts] = useState<TrainingSession[]>([]);

  useEffect(() => {
    const getRandomStrings = (): TrainingSession[] => {
      const count = Math.floor(Math.random() * 3) + 1;
      return tasks.sort(() => 0.5 - Math.random()).slice(0, count);
    };

    setRandomTexts(getRandomStrings());
  }, [tasks]);

  const handleClick = (session: TrainingSession) => {
    setSelectedSession(session);
  };

  const closePopup = () => {
    setSelectedSession(null);
  };

  return (
    <div className="list-none m-0 p-0 w-full">
      {randomTexts.map((item, index) => (
        <ul key={index}>
          <li
            onClick={() => handleClick(item)}
            className="bg-cornflower-blue rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
          >
            <ContentElement data={item} />
          </li>
        </ul>
      ))}
      {selectedSession && (
        <SessionPopup session={selectedSession} onClose={closePopup} />
      )}
    </div>
  );
};

export default ContentList;
