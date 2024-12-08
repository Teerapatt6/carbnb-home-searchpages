import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ParkingSpotCard } from "@/components/ParkingSpotCard";
import { Calendar, Car, DollarSign, Zap } from "lucide-react";

const Search = () => {
  const [sortBy, setSortBy] = useState("rating");

  const spots = [
    {
      image: "/lovable-uploads/875bdc16-349b-4cd4-ad9a-570cff15e32a.png",
      title: "Air Travel Parking",
      location: "Sukhumvit 63 Alley, Bangkok",
      price: 40,
      rating: 4.9
    },
    {
      image: "/lovable-uploads/875bdc16-349b-4cd4-ad9a-570cff15e32a.png",
      title: "Beach Parking",
      location: "Phahonyothin 34, Bangkok",
      price: 35,
      rating: 4.8
    },
    {
      image: "/lovable-uploads/875bdc16-349b-4cd4-ad9a-570cff15e32a.png",
      title: "The iCon Parking",
      location: "Ladprao 64, Bangkok",
      price: 30,
      rating: 4.7
    }
  ].sort((a, b) => sortBy === "rating" ? b.rating - a.rating : b.price - a.price);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input className="pl-10" type="datetime-local" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input className="pl-10" type="datetime-local" />
            </div>
            <div className="relative">
              <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm">
                <option>Any Car</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Van</option>
              </select>
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm">
                <option>Any Price</option>
                <option>$0-$20</option>
                <option>$20-$40</option>
                <option>$40+</option>
              </select>
            </div>
            <div className="relative">
              <Zap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm">
                <option>EV Station</option>
                <option>Required</option>
                <option>Not Required</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Over 1,000 places</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              className="border rounded-md px-3 py-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Highest Rating</option>
              <option value="price">Highest Price</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <ParkingSpotCard key={index} {...spot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;