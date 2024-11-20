import React from "react";
import { TrainingSession } from "@/app/data/TrainingSession";

type ContentElementProps = {
  data: TrainingSession;
  onClick: () => void;
};

const ContentElement: React.FC<ContentElementProps> = ({ data, onClick }) => {
  return (
    <div
      className="bg-cornflowerblue cursor-pointer rounded-lg text-sm p-2 mb-1 w-max "
      onClick={onClick}
    >
      <p className="text-xs m-0 font-bold">
        [{data.start_time} - {data.end_time}]
      </p>
      <div>
        {data.trainer} - {data.training_type}
      </div>
    </div>
  );
};

export default ContentElement;
