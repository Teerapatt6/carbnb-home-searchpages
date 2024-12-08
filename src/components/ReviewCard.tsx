interface ReviewCardProps {
  rating: number;
  review: string;
  author: string;
}

export const ReviewCard = ({ rating, review, author }: ReviewCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{review}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-primary font-semibold">{author[0]}</span>
        </div>
        <span className="text-gray-700 font-medium">{author}</span>
      </div>
    </div>
  );
};