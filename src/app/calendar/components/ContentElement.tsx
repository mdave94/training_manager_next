import React from "react";
import { TrainingSession } from "@/app/data/TrainingSession";

type ContentElementProps = {
  data: TrainingSession;
};

const ContentElement: React.FC<ContentElementProps> = ({ data }) => {
  return (
    <div className="bg-cornflowerblue  rounded-lg text-sm p-2 mb-1 w-max ">
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
