import { MapPin, Car, Clock } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ParkingSpotCard } from "@/components/ParkingSpotCard";
import { ReviewCard } from "@/components/ReviewCard";
import { FAQ } from "@/components/FAQ";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Find Your Perfect Spot",
      description: "Easily find parking by location, nearby points or availability here.",
      icon: <MapPin className="w-6 h-6 text-primary" />
    },
    {
      title: "Park and Charge Easily",
      description: "Need to charge your EV? Find parking spots with charging stations.",
      icon: <Car className="w-6 h-6 text-primary" />
    },
    {
      title: "Save your Time",
      description: "Book your spot in advance and save time finding parking.",
      icon: <Clock className="w-6 h-6 text-primary" />
    }
  ];

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

  const reviews = [
    {
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius arcu nec tellus malesuada, et varius lorem elementum.",
      author: "@Kimi"
    },
    {
      rating: 4,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius arcu nec tellus malesuada, et varius lorem elementum.",
      author: "@Alonso"
    },
    {
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius arcu nec tellus malesuada, et varius lorem elementum.",
      author: "@Yuki"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-pattern min-h-[600px] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simplify Your Parking Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Whether it's for a quick stop or an extended stay, discover the best spaces just for you.
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Popular Spots Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Places</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularSpots.map((spot, index) => (
              <ParkingSpotCard
                key={index}
                {...spot}
                onClick={() => navigate('/search')}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Client's reviews</h2>
        <p className="text-center text-gray-600 mb-12">
          Find the perfect parking for your journey—join us on CarBNB today
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Index;