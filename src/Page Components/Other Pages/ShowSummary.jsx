import { useLocation } from "react-router-dom";
import parse from "html-react-parser"

const ShowSummary = () => {

  const { state } = useLocation();

  return (
    <div className="w-75 mx-auto my-5">
      <p className="fw-bold">Summary :</p>
      {parse(state)}
    </div>
  );
};

export default ShowSummary;