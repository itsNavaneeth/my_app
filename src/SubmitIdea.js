import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitIdea = () => {
    const [team_name, setTeamName] = useState('Sentinels');
    const [idea_name, setIdeaName] = useState('');
    const [idea_desc, setIdeaDesc] = useState('');
    const [categories, setCategories] = useState('Other');
    const [upvotes, setUpvotes] = useState(69);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const idea = { team_name, idea_name, idea_desc, categories, upvotes };

        fetch('http://localhost:8000/ideas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idea)
        }).then(() => {
            // console.log("New blog added");
            navigate('/ideas');
        })
    }
    return (
        <>
            <div className="create">
                <h2>Submit your idea: </h2>
                <form onSubmit={handleSubmit}>
                    <label>Idea Name: </label>
                    <input
                        type="text"
                        required
                        value={idea_name}
                        onChange={(e) => setIdeaName(e.target.value)}
                    />
                    <label>Idea Description: </label>
                    <textarea
                        required
                        value={idea_desc}
                        onChange={(e) => setIdeaDesc(e.target.value)}
                    />
                    <select
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Sustainability">Sustainability</option>
                        <option value="Virtual Reality">Virtual Reality</option>
                        <option value="Waste Reduction">Waste Reduction</option>
                        <option value="Education">Education</option>
                        <option value="Social Impact">Social Impact</option>
                        <option value="Mental Health">Mental Health</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Other">Other</option>
                    </select>

                    <button>Submit Idea</button>
                </form>
            </div>
        </>
    );
}

export default SubmitIdea;