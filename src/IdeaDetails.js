import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IdeaDetails = () => {
    const { id } = useParams();
    const { data: idea, isLoading, error } = useFetch('http://localhost:8000/ideas/' + id);
    return (
        <>
            <div className="blog-details">
                {error && <div>{error}</div>}
                {isLoading && <p>Loading...</p>}
                {idea && (
                    <article>
                        <h1>Team: {idea.team_name}</h1>
                        <br />
                        <br />
                        <h2><b>Idea: </b>{idea.idea_name}</h2>
                        <br />
                        <p><b>Description: </b>{idea.idea_desc}</p>
                        <br />
                        <p><b>Categories: </b>{idea.categories}</p>
                        <br />
                        <p><b>Upvotes: </b>{idea.upvotes}</p>


                        {/* <p>
                            <b>Categories: </b>
                            {idea.categories.map((cat, ind) => (
                                <span key={ind}>{cat} </span>
                            ))}
                        </p> */}
                    </article>
                )}

                {/* <h1>Idea Details - {id}</h1> */}


                {/* <h2><b>Idea: </b>{idea.idea_name}</h2>
                <p><b>Description: </b>{idea.idea_desc}</p>
                <p><b>Upvotes: </b>{idea.upvotes}</p> */}
                {/* <p>Categories: {idea.categories}</p> */}
                {/* <p>
                    <b>Categories: </b>
                    {idea.categories.map((cat, ind) => (
                        <span key={ind}>{cat} </span>
                    ))}
                </p> */}

            </div>
        </>
    );
}

export default IdeaDetails;