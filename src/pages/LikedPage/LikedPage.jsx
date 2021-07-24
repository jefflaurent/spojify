import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './LikedPage.css'

function LikedPage() {

    const [ tracks, setTracks ] = useState()

    useEffect(() => {
        setTracks(JSON.parse(localStorage.getItem('likedSong')))
    }, [])

    const removeLikedSong = (track) => {
        let trackList = []
        trackList = JSON.parse(localStorage.getItem('likedSong'))
        if(trackList == null) {
            trackList = []
        }

        let idx = trackList.findIndex(t => track.id == t.id)
        if(idx != -1) {
            trackList.splice(idx , 1)
        }
        localStorage.setItem('likedSong', JSON.stringify(trackList))
        setTracks(trackList)
    }

    console.log(tracks)

    if(tracks == undefined || tracks.length == 0) {
        return (
            <div>
                <NavBar />
                <div className="header">
                    My Favorites
                </div>
                <div className="msg">
                    You have no favorites
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <NavBar />
                <div className="header">
                    My Favorites
                </div>
                <div className="track-container">
                    {tracks?.map(track => {
                        return (
                            <div className="track">
                                <div className="track-left">
                                    <div className="star" data-value={track.id} onClick={() => {
                                        removeLikedSong(track)
                                    }}>
                                        <i class="fas fa-trash del-icon"></i>
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


}

export default LikedPage