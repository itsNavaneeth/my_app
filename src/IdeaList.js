import { Link } from 'react-router-dom';
const IdeaList = ({ ideas, title }) => {
    // console.log(ideas);

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {ideas.map(idea => (
                <div className="blog-preview" key={idea.id} >
                    <Link to={`/ideas/${idea.id}`} >


                        {/* <h1>Team: {idea.team_name}</h1> */}
                        <h2><b>Idea: </b>{idea.idea_name}</h2>
                        <p><b>Description: </b>{idea.idea_desc}</p>
                        <p><b>Categories: </b>{idea.categories}</p>
                        <p><b>Upvotes: </b>{idea.upvotes}</p>
                        {/* <p>
                            <b>Categories: </b>
                            {idea.categories.map((cat, ind) => (
                                <span key={ind}>{cat} </span>
                            ))}
                        </p> */}


                    </Link>


                </div>
            ))}
        </div>
    );
}

export default IdeaList;