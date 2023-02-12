import { Link } from "react-router-dom";
const notFound = () => {
    return (
        <>
            <div className="blog-details">
                <h1>Hi There</h1>
                <h2>The page you are searching is not found xD</h2>
                <Link to="/ideas">
                    <button>Click here to go back to idea lists</button>
                </Link>
            </div>
        </>
    );
}

export default notFound;