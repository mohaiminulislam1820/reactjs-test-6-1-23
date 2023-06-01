import { useLoaderData } from 'react-router-dom'
import Show from './Show';

const Home = () => {
    const shows = useLoaderData();
    console.log(shows);
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center display-3 fw-bold my-5'>All Shows</h1>

            <div className='row gy-3'>
                {shows.map(show => <Show key={show.show.id} show={show?.show} />)}
            </div>


        </div>
    );
};

export default Home;