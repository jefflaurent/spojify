import { Link } from 'react-router-dom'
import './AlbumCard.css'

function AlbumCard(props) {
    const album = props.album
    const name = props.artist
    const url = `/album/${name}/${album.id}`

    return(
        <Link to={url} className="card album-card" key={album.id}>
            <img className="card-img-top" src={album.image} alt="" />
            <div className="card-body">
                <h3 className="card-title">{album.name}</h3>
                <p className="card-subtitle">{name}</p>
            </div>
        </Link>
    )
}

export default AlbumCard