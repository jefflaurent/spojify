import './ArtistPage.css'
import '../../components/AlbumCard/AlbumCard'
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AlbumCard from '../../components/AlbumCard/AlbumCard'

function ArtistPage() {
    const [albums, setAlbums] = useState([])
    const [name, setName] = useState(["Taylor Swift"])
    const [value, setValue] = useState([""])

    const handleSearch = (e) => {
        e.preventDefault()
        setName(value)
    }

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
        .then(res => res.json())
        .then(data => {
            if(data) {
                setAlbums(data.data.albums)
            }
        })
    }, [name])

    return (
        <div>
            <NavBar />
            <form action="/" className="form-search d-inline-flex search-bar" onSubmit={handleSearch}>
                <input type="search"
                    name="search" id="search" placeholder="Search Artist"
                    value={value} onChange={e => { setValue(e.target.value) }} className="form-control"
                />
            </form>
           
           <div className="album-container">
                {albums?.map(album => {
                    return (
                        <AlbumCard album={album} artist={name}/>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ArtistPage