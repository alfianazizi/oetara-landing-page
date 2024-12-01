const Service = () => {
  const services = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png",
      title: "Influence people using Impactful Influencer",
      description: "KOL from Nano to Mega, Community, Live Streaming, Trending Topic"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/702/702797.png",
      title: "Creative Idea makes Creative Output",
      description: "Social media Maintenance, Video Production, Digital Activation"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1998/1998087.png",
      title: "Advertise Your Brand",
      description: "Ads, LinkedIn Ads"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3932/3932290.png",
      title: "Impressive Marketing Strategy",
      description: "Digital Marketing, B2B Marketing Strategy with Data-driven Analysis"
    }
  ];

  const stages = [
    {
      number: 1,
      title: "Input Brief",
      image: "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?auto=format&w=400&q=80"
    },
    {
      number: 2,
      title: "Understand Client Expectation",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&w=400&q=80"
    },
    {
      number: 3,
      title: "Data Research & Analysis",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&w=400&q=80"
    },
    {
      number: 4,
      title: "Creative Idea & Concept",
      image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?auto=format&w=400&q=80"
    },
    {
      number: 5,
      title: "Grow your Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=400&q=80"
    },
    {
      number: 6,
      title: "Report & Suggestion",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=400&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 my-12">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-6">Our Service</h1>
      <p className="text-gray-700 mb-4">
        OETARA is a maps where top strategic, creative, Influencer, and analysts who
        called themselves "Navigator" let us show you the right path
      </p>
      <p className="text-gray-600 mb-16">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>

      {/* Services Grid - Update the styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {services.map((service, index) => (
          <div key={index} className="p-6 text-center">
            <img 
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Stages of Service */}
      <h2 className="text-3xl font-bold text-center mb-12 text-[#DC2626]">Stages of Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20 mb-12 relative">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            {/* Panah ke kanan untuk stage 1 dan 2 */}
            {(index === 0 || index === 1) && (
              <div className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2">
                <span className="text-[#DC2626] text-4xl">»</span>
              </div>
            )}
            {/* Panah ke bawah untuk stage 3 */}
            {index === 2 && (
              <div className="hidden md:block absolute left-1/2 bottom-[-4rem] transform -translate-x-1/2">
                <span className="text-[#DC2626] text-4xl rotate-90 inline-block">»</span>
              </div>
            )}
            {/* Panah ke kiri untuk stage 4 dan 5 */}
            {(index === 4 || index === 3) && (
              <div className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2 rotate-180">
                <span className="text-[#DC2626] text-4xl">»</span>
              </div>
            )}
            {/* Card dengan border putih dan shadow */}
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              {/* Badge nomor dengan warna merah */}
              <div className="absolute -top-4 -left-4 flex items-center">
                <div className="bg-[#DC2626] text-white rounded-lg py-1 px-3 text-sm font-bold">
                  {stage.number}
                </div>
                <h3 className="ml-2 font-semibold">{stage.title}</h3>
              </div>
              <img 
                src={stage.image} 
                alt={stage.title}
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
