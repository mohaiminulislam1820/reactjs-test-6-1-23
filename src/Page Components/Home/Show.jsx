import { useNavigate } from "react-router-dom";


const Show = ({ show }) => {
    const { genres, name, language, summary } = show;

    const navigate = useNavigate();

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
            <div className="p-3 border rounded-2">

                <p> <span className="fw-semibold">Name :</span>  {name}</p>
                <p><span className="fw-semibold">Genres :</span> {genres.join(', ')}</p>
                <p><span className="fw-semibold">Language :</span> {language}</p>

                <button className="btn btn-primary fw-bold mt-2" onClick={() => navigate('/show-summary', { state: summary })}>View Summary</button>
            </div>

        </div>
    );
};

export default Show;