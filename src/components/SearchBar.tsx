import { Calendar, Car, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 bg-white p-2 rounded-lg shadow-lg max-w-4xl w-full">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input className="pl-10" placeholder="Search Location" />
      </div>
      <div className="flex-1 relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input className="pl-10" type="datetime-local" />
      </div>
      <div className="flex-1 relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input className="pl-10" type="datetime-local" />
      </div>
      <div className="flex-1 relative">
        <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
          <option>Any Car</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Van</option>
        </select>
      </div>
      <Button className="bg-primary hover:bg-primary/90">Search</Button>
    </div>
  );
};