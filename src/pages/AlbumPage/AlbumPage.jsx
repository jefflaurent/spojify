import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './AlbumPage.css'
import $ from 'jquery'


function AlbumPage() {
    const [tracks, setTracks] = useState([])
    let {id} = useParams()
    let {name} = useParams()

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data.data)
            setTracks(data.data)
        })
    }, [])

    const likeMusic = (track) => {
        let trackList = []
        trackList = JSON.parse(localStorage.getItem('likedSong'))
        if(trackList == null) {
            trackList = []
        }

        if(!trackList.find(t => track.id == t.id)) {
            trackList.push(track)
        }
        localStorage.setItem('likedSong', JSON.stringify(trackList))
    }

    return (
        <div>
            <NavBar />
            <div className="header">
                Best of {name}
            </div>
            <div className="track-container">
                {tracks?.map(track => {
                    return (
                        <div className="track">
                            <div className="track-left">
                                <div className="star" data-value={track.id} onClick={() => {
                                    likeMusic(track)
                                }}>
                                    <i class="fas fa-star like-icon"></i>
                                </div>
                                <div>
                                    {track.name}
                                </div>
                            </div>
                            <div className="track-right">
                                <audio src={track.preview_url} controls />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AlbumPage