import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ParkingSpotCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  onClick?: () => void;
}

export const ParkingSpotCard = ({
  image,
  title,
  location,
  price,
  rating,
  onClick
}: ParkingSpotCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
      <div className="p-4" onClick={onClick}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
            <span className="text-primary">★</span>
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-semibold">${price}</span>
            <span className="text-gray-600">/hour</span>
          </div>
          <Button variant="outline">View Details</Button>
        </div>
      </div>
    </div>
  );
};