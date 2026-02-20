'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }

    return <button className="hover:bg-sky-700 border:2px-solid-red" onClick={handleClick}>Like ({likes})</button>;
}