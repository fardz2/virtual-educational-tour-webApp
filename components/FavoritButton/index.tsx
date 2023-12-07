"use client"

import React, { useState } from "react";
import { Heart } from "@phosphor-icons/react"

interface FavoritButtonProps {
    contentId: number;
    onAddToFavorites: (contentId: number) => void;
}

const FavoritButton = (props: FavoritButtonProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleAddToFavorite = () => {
        setIsFavorite(!isFavorite)
        props.onAddToFavorites(props.contentId)
    }
    
    return (
        <button className="" onClick={handleAddToFavorite}>
            <Heart size={24} className={`${isFavorite ? "text-gray-50 border border-gray-100" : "text-red-700 border border-red-700"} transition-all duration-200`} />
        </button>
    );
};

export default FavoritButton;
