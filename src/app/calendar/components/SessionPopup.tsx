import React from "react";
import { TrainingSession } from "@/app/data/TrainingSession";

type SessionPopupProps = {
  session: TrainingSession;
  onClose: () => void;
};

const SessionPopup: React.FC<SessionPopupProps> = ({ session, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-80 max-w-full flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Edzés részletei</h2>
        <p className="mb-2">
          <strong>Időpont:</strong> {session.start_time} - {session.end_time}
        </p>
        <p className="mb-2">
          <strong>Edző:</strong> {session.trainer}
        </p>
        <p className="mb-2">
          <strong>Helyszín:</strong> {session.location}
        </p>
        <p className="mb-2">
          <strong>Leírás:</strong> {session.description}
        </p>
        <p className="mb-2">
          <strong>Edzés típus:</strong> {session.training_type}
        </p>
      </div>
    </div>
  );
};

export default SessionPopup;
