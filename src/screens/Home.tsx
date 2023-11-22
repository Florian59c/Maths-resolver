import { Link } from 'react-router-dom';
import mathsList from '../objects/mathsList';
import './css/Home.css';

function Home() {
    return (
        <div className="Home">
            <h1>Choisissez l'opération mathématique que vous souhaitez réaliser</h1>
            <div className='maths-list'>
                {mathsList.map((operation) => {
                    return (
                        <div className='op' key={operation.id}>
                            <Link to="*">
                                <p>{operation.name}</p>
                            </Link>
                        </div>
                        // <div className='dice' key={index}>
                        //     <p>Dé à {dice.faces} faces :</p>
                        //     <div>
                        //         <Link to={`/roll-dice/${dice.name}`}>
                        //             <img src={dice.img} alt={`Dé à ${dice.faces} faces`} />
                        //         </Link>
                        //     </div>
                        // </div>
                    );
                })}
            </div>
        </div >
    );
}

export default Home;
