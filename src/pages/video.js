import React, { useRef, useState } from 'react'
import './video.css'

function Video() {

    const videoRef = useRef(null);
    const [ play, setPlay ] = useState(false);

    function handleStart () {
        if (!play) {
            videoRef.current.play();
            setPlay(true);
        }
        else {
           videoRef.current.pause();
           setPlay(false);
        }
    }

    return (
        <div className='video'>
            <video
                className='video_player'
                ref={ videoRef }
                onClick={ handleStart } 
                loop
src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4'
            >
            </video>
        </div>
    )
}

export default Video