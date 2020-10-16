import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {

    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for: </h3>
            <p>
                {song.title}
            </p>
            Title: {song.title}
            <br/>
            Duration: {song.duration}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        song: state.selectedSong
    }
}
export default connect(mapStatetoProps)(SongDetail)
