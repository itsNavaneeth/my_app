import { Stack, Button, Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

import { Link } from 'react-router-dom';
import IdeaList2 from "./IdeaList_copy";
const IdeaList = ({ ideas, title }) => {
    console.log(ideas);

    return (
        <>
            <div className="blog-list">
                <h1>{title}</h1>
                {ideas.map(idea => (
                    <div className="blog-preview" key={idea.ideaId} >
                        <Link to={`/ideas/${idea.ideaId}`} >

                            <IdeaList2 />

                            {/* <h2><b>Idea: </b>{idea.idea_name}</h2>
                            <p><b>Description: </b>{idea.idea_desc}</p>
                            <p><b>Categories: </b>{idea.category}</p>
                            <p><b>Upvotes: </b>{idea.upvotes}</p> */}


                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default IdeaList;