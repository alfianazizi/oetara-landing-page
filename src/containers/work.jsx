import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
  const navigate = useNavigate();

  const cases = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be",
      title: "KOL services",
      subtitle: "for Dejavu"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
      overlay: true,
      title: "KOL services",
      subtitle: "for Dejavu"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586335963805-7b603f62a048",
      title: "Beauty Product Campaign",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8",
      title: "Fashion Campaign",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      title: "Social Media Campaign",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
      title: "Digital Marketing",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31",
      title: "Beauty Campaign",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      title: "Car Campaign",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      title: "Fashion Shoot",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
      title: "Social Campaign",
    },
  ];

  return (
    <section className="my-12">
      <div className="mx-auto px-8 md:px-12 py-12">
        <h3 className="text-2xl md:text-3xl font-[600] mb-4">Case Study</h3>
        <p className="mb-8 text-gray-600 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {cases.map((item) => (
            <div 
              key={item.id} 
              className={`relative group cursor-pointer rounded-lg overflow-hidden
                ${item.id === 2 ? 'col-span-1 row-span-1' : ''}
                ${item.id === 1 || item.id === 3 ? 'col-span-1 row-span-1' : ''}
                ${item.id === 4 || item.id === 5 ? 'col-span-1' : ''}
              `}
              onClick={() => {
                if (window.innerWidth <= 768) { // Check for mobile resolution
                  setTimeout(() => navigate(`/work/detail-work/${item.id}`), 1000); // 1 seconds delay
                } else {
                  navigate(`/work/detail-work/${item.id}`); // No delay for larger screens
                }
              }}
            >
              {/* <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                style={{ aspectRatio: item.id === 2 ? '1/1' : '4/3' }}
              /> */}
              <svg className='rounded-none md:rounded-lg shadow-image object-cover' viewBox="0 0 290 227">
                  <rect width="100%" height="100%" fill="lightgray" />
                  <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="20">Image Work</text>
              </svg>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <p className="md:text-xl font-medium">{item.title}</p>
                {item.subtitle && <p className="text-sm md:text-lg md:mb-4">{item.subtitle}</p>}
                <span className="md:mt-2 text-2xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
