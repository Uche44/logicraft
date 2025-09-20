import React from "react";

interface NewsCardProps {
  date: string;
  image: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, image, title }) => {
  return (
    <div className="bg-[#E6F5FF] rounded-2xl shadow-md p-4 max-w-sm">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded">
          Published on: {date}
        </span>
      </div>
      <p className="mt-3 text-gray-900 font-medium">{title}</p>
    </div>
  );
};

const LatestNews: React.FC = () => {
  const newsData = [
    {
      date: "17 Feb 2023",
      image: "https://i.ibb.co/Zx9hmnS/plane-logistics.jpg", // Replace with your local or hosted image
      title:
        "Easing Cross-Border Trade And Customs In A Freer World: The African Perspective",
    },
    {
      date: "17 Feb 2023",
      image: "https://i.ibb.co/8zKw3nX/ship-logistics.jpg", // Replace with your local or hosted image
      title:
        "Easing Cross-Border Trade And Customs In A Freer World: The African Perspective",
    },
    {
      date: "17 Feb 2023",
      image: "https://i.ibb.co/kJ2dMCP/factory-logistics.jpg", // Replace with your local or hosted image
      title:
        "Easing Cross-Border Trade And Customs In A Freer World: The African Perspective",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Charting Our Course: Taking Stock of Our Journey, Embracing Growth,
          and Paving the Way Forward. Let's Pause, Reflect, and Renew Our
          Commitment to Progress.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 justify-center">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            date={news.date}
            image={news.image}
            title={news.title}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
