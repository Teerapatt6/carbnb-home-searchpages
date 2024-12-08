import { Calendar, Car, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Input type="date" className="w-full" placeholder="Check in" />
        </div>
        <div className="flex-1 relative">
          <Input type="date" className="w-full" placeholder="Check out" />
        </div>
        <div className="flex-1 relative">
          <select className="w-full h-10 pl-4 pr-8 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
            <option>Car type</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Van</option>
          </select>
        </div>
        <div className="flex-1 relative">
          <select className="w-full h-10 pl-4 pr-8 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
            <option>Price</option>
            <option>$0 - $100</option>
            <option>$100 - $200</option>
            <option>$200+</option>
          </select>
        </div>
        <div className="flex-1 relative">
          <select className="w-full h-10 pl-4 pr-8 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
            <option>EV Station</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>
        </div>
      </div>
      <Button 
        onClick={handleSearch}
        className="w-full md:w-auto md:self-end"
        size="lg"
      >
        Search Parking
      </Button>
    </div>
  );
};