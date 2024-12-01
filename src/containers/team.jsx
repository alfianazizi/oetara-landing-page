import Headers from '../layouts/Headers';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    // Row 1
    { id: 1, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, image: "https://randomuser.me/api/portraits/men/3.jpg", name: "Shee Fulan", role: "Director" },
    { id: 4, image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" },
    // Row 2
    { id: 6, image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7, image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8, image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 9, image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 10, image: "https://randomuser.me/api/portraits/women/10.jpg" },
    // Row 3
    { id: 11, image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 12, image: "https://randomuser.me/api/portraits/women/12.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Headers />
      
      {/* Breadcrumb */}
      <div className="py-4">
        <Link 
          to="/"
          className="text-gray-600 hover:text-red-600 transition-colors duration-200"
          aria-label="Back to Navigator"
        >
          ← Navigator
        </Link>
      </div>

      {/* Title Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold">Our Navigator</h1>
        <p className="text-gray-600 mt-4">
          We are Navigators not only crafting the right message but also setting 
          the measurable goals and will be your guidance through Digital World 
          Crowdedness.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-red-600 mb-8">Our Creative Team</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="aspect-square relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img 
                src={member.image} 
                alt={member.name || 'Team member'} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              {member.name && (
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center
                  ${member.name ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                >
                  <div>
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">1</button>
          {[2, 3, 4, 5].map((page) => (
            <button 
              key={page}
              className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center"
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team; 