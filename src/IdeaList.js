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

                            {/* <IdeaList2 /> */}

                            <h2><b>Idea: </b>{idea.ideaTitle}</h2>
                            <p><b>Description: </b>{idea.ideaDescription}</p>
                            <p><b>Category: </b>{idea.cat1}</p>
                            <p><b>Upvotes: </b>{idea.upvote}</p>
                            <p><b>Shortlist: </b>{idea.shortlist}</p>


                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default IdeaList;