import React from 'react';
import ReactPlayer from 'react-player';
import { DefaultPlayer as Video } from 'react-html5video';

import Sinapse01 from "../../Assets/Videos/logo-sinapse-animacao-palavras_1.mp4"
import Sinapse02 from "../../Assets/Videos/logo-sinapse-bolinha-i.mp4"
import Sinapse03 from "../../Assets/Videos/logo-sinapse-pisca-pisca.mp4"
import Sinapse04 from "../../Assets/Videos/SinAPse_animação.mp4"

export const VideoComponent = () => {
    return (
        <ReactPlayer
            url="https://youtu.be/spsw6GwlLbA"
            width="100%"
            height="300px"
            controls
        />
    );
};

export const SinapseVideo = () => {
    const videos = [Sinapse01, Sinapse02, Sinapse03, Sinapse04];

    return (
        <div className="flex flex-col gap-[30px]">
            {videos.map((video, index) => (
                <div key={index} className="relative group">
                    <video
                        src={video}
                        className="rounded-lg shadow-lg w-full"
                        controls={false}
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">
                            Vídeo {index + 1}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};


