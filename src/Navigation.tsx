import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <Link to={'/'}>
                <button>Domovská stránka</button>
            </Link>
            <Link to={'/o-mne'}>
                <button>O mně</button>
            </Link>
            <Link to={ '/vzdelani' }>
                <button>Vzdělání</button>
            </Link>
            <Link to={'/certifikaty-a-kurzy'}>
                <button>Certifikáty a kurzy</button>
            </Link>
            <Link to={"/zkusenosti"}>
                <button>Zkušenosti</button>
            </Link>
            <Link to={"/portfolio"}>
                <button>Portfolio</button>
            </Link>
            <Link to={"/kontakt"}>
                <button>Kontakt</button>
            </Link>
        </nav>
    );
}