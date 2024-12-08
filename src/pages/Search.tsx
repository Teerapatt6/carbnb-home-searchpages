import { ParkingSpotCard } from "@/components/ParkingSpotCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Search = () => {
  const [sortBy, setSortBy] = useState("price");

  const popularSpots = [
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Air Travel Parking",
      location: "Muhammad 52 Alley, Khlong Tan Nuea",
      price: 300,
      rating: 4.9
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Beach Parking",
      location: "Phahonyothin 34, Senanikom, Chatuchak",
      price: 500,
      rating: 4.8
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "The iCon Parking",
      location: "Phahonyothin 34, Senanikom, Chatuchak",
      price: 400,
      rating: 4.7
    }
  ];

  const otherSpots = [
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Dressrosa Spot",
      location: "74/05 Sukhumvit 63 Alley, Khlong Tan Nuea",
      price: 250,
      rating: 4.9
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Alabasta Place",
      location: "34/54 Phahonyothin 34, Senanikom",
      price: 350,
      rating: 4.7
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "God Valley Park",
      location: "134/56 Ladprao 64, Wang Thonglang",
      price: 280,
      rating: 4.6
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Marine Ford Parking",
      location: "89/12 Rama IX, Huai Khwang",
      price: 320,
      rating: 4.5
    }
  ];

  const handleSort = (type: string) => {
    setSortBy(type);
    // Add sorting logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Sorting Controls */}
      <div className="mb-8 flex gap-4">
        <Button 
          variant={sortBy === "price" ? "default" : "outline"}
          onClick={() => handleSort("price")}
        >
          Sort by Price
        </Button>
        <Button 
          variant={sortBy === "rating" ? "default" : "outline"}
          onClick={() => handleSort("rating")}
        >
          Sort by Rating
        </Button>
      </div>

      {/* Popular Spots */}
      <h2 className="text-2xl font-bold mb-6">Popular Places</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {popularSpots.map((spot, index) => (
          <ParkingSpotCard key={index} {...spot} />
        ))}
      </div>

      {/* Other Spots */}
      <h2 className="text-2xl font-bold mb-6">Other Available Spots</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {otherSpots.map((spot, index) => (
          <ParkingSpotCard key={index} {...spot} />
        ))}
      </div>
    </div>
  );
};

export default Search;
