import audioUrl1 from "../test-music1.mp3";
import audioUrl2 from "../test-music2.mp3";
import audioUrl3 from "../test-music3.mp3";

const defaultState = {
    musics: [{
            id: 1,
            name: "Tech House vibes",
            author: "Alejandro Magaña (A. M.)",
            audioUrl: audioUrl1,
            genre: ["House & Electronic"],
            mood: ["Mellow", "Smooth"]
        },
        {
            id: 2,
            name: "Hazy After Hours",
            author: "Alejandro Magaña (A. M.)",
            audioUrl: audioUrl2,
            genre: ["House & Electronic"],
            mood: ["House", "Uplifting"]
        },
        {
            id: 3,
            name: "Hip Hop 02",
            author: "Lily. J",
            audioUrl: audioUrl3,
            genre: ["Experimental"],
            mood: ["Calm", "Smooth"]
        },
        {
            id: 4,
            name: "Tech House vibes",
            author: "Alejandro Magaña (A. M.)",
            audioUrl: audioUrl1,
            genre: ["House & Electronic"],
            mood: ["Mellow", "Smooth"]
        },
        {
            id: 5,
            name: "Hazy After Hours",
            author: "Alejandro Magaña (A. M.)",
            audioUrl: audioUrl2,
            genre: ["House & Electronic"],
            mood: ["House", "Uplifting"]
        },
        {
            id: 6,
            name: "Hip Hop 02",
            author: "Lily. J",
            audioUrl: audioUrl3,
            genre: ["Experimental"],
            mood: ["Calm", "Smooth"]
        },
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    return state;
}