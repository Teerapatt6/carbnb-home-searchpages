import { ParkingSpotCard } from "@/components/ParkingSpotCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";

const Search = () => {
  const [sortBy, setSortBy] = useState("highest");

  const popularSpots = [
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Air Travel Parking",
      location: "Muhammad 52 Alley, Khlong Tan Nuea",
      price: 300,
      rating: 4.9,
      covered: true,
      notCovered: false,
      evCharging: true
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Beach Parking",
      location: "Phahonyothin 34, Senanikom, Chatuchak",
      price: 500,
      rating: 4.8,
      covered: true,
      notCovered: false,
      evCharging: true
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "The iCon Parking",
      location: "Phahonyothin 34, Senanikom, Chatuchak",
      price: 400,
      rating: 4.7,
      covered: false,
      notCovered: true,
      evCharging: true
    }
  ];

  const otherSpots = [
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Dressrosa Spot",
      location: "74/05 Sukhumvit 63 Alley, Khlong Tan Nuea",
      price: 250,
      rating: 4.9,
      covered: true,
      notCovered: true,
      evCharging: true
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "Alabasta Place",
      location: "34/54 Phahonyothin 34, Senanikom",
      price: 350,
      rating: 4.7,
      covered: true,
      notCovered: false,
      evCharging: true
    },
    {
      image: "/lovable-uploads/43fb1a7a-6d02-47a7-8d6a-cb0a5e916258.png",
      title: "God Valley Park",
      location: "134/56 Ladprao 64, Wang Thonglang",
      price: 280,
      rating: 4.6,
      covered: true,
      notCovered: false,
      evCharging: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Results Count and Sort */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Over 1,000 places</h2>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-1"
        >
          <option value="highest">Highest rate</option>
          <option value="lowest">Lowest rate</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
        </select>
      </div>

      {/* Popular Places */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          🔥 Popular places
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {popularSpots.map((spot, index) => (
            <ParkingSpotCard key={index} {...spot} />
          ))}
        </div>
      </div>

      {/* Other Spots */}
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          📍 Others
        </h2>
        <div className="flex flex-col gap-4">
          {otherSpots.map((spot, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex gap-4">
                <img 
                  src={spot.image} 
                  alt={spot.title} 
                  className="w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{spot.title}</h3>
                      <p className="text-gray-600 text-sm">{spot.location}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                      <span className="text-primary">★</span>
                      <span className="font-medium">{spot.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="font-semibold">${spot.price}</span>
                      <span className="text-gray-600">/hour</span>
                    </div>
                    <Button>Booking Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
