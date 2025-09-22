import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  role: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ role, image, title }) => {
  return (
    <div className="bg-[#E6F5FF] rounded-2xl shadow-md p-4 max-w-sm">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-gray-900 font-bold">{title}</p>
      <p className="mt-3 text-gray-900 font-medium">{role}</p>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  const newsData = [
    {
      image: "girl.jpg",
      title: "Perpetual Asogwa",
      role: "Frontend developer, frontend lead @shecodeAfrica UNN",
    },
    {
      image: "girl.jpg",
      title: "Perpetual Asogwa",
      role: "Frontend developer, frontend lead @shecodeAfrica UNN",
    },
    {
      image: "girl.jpg",
      title: "Perpetual Asogwa",
      role: "Frontend developer, frontend lead @shecodeAfrica UNN",
    },
  ];

  return (
    <section className="relative h-fit md:h-[38rem] mb-6 w-[95%] md:-z-2 py-12 px-6 md:px-16 bg-gray-50 flex flex-col items-center">
      <div className="absolute hidden md:block rounded-[2rem] -z-1 bottom-0 left-0 w-full h-[17rem] bg-blue-500"></div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Over 1000+ People Trust Us
        </h2>
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
            role={news.role}
            image={news.image}
            title={news.title}
          />
        ))}
      </div>

      <button className="text-black rounded-[2rem] bg-white flex text-2xl mt-8 px-5 py-3 cursor-pointer hover:brightness-110">
        Show All People
        <ExternalLink className="ml-2" />
      </button>
    </section>
  );
};

export default TeamMembers;
