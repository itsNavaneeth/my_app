import IdeaList from "./IdeaList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: ideas, isLoading, error } = useFetch('http://localhost:8000/ideas');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <p>Loading...</p>}
            {ideas && <IdeaList ideas={ideas} title="Ideas List" />}
        </div>
    );
}

export default Home;
