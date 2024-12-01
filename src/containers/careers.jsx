import { useState } from 'react';

const Careers = () => {
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);

  const jobListings = [
    {
      title: 'Planning Manager',
      type: 'Full Time',
      level: 'Manager',
      description: 'The purpose of this role is to manage a team of media planners and assist the Business Producers on a day to day basis...',
      responsibilities: {
        'Business Development Strategy': [
          'Develop and implement comprehensive business development strategies to tap into new markets.',
          'Identify potential clients and cultivate relationships to increase our client base.',
          'Collaborate with the leadership team to define business goals and align initiatives.',
        ],
        'Client Relationship Management': [
          'Build and maintain strong, long-lasting relationships with clients.',
          'Act as the main point of contact for clients, ensuring their needs are met.',
          'Negotiate contracts and close deals while ensuring a win-win for both parties.',
        ]
      }
    },
    {
      title: 'Accountant',
      type: 'Contract',
      level: 'Entry Level',
      description: '...',
    },
    {
      title: 'Motion Graphic',
      type: 'Internship',
      level: 'Internship',
      description: '...',
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center text-white" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Jobs, Employment & Career Opportunities</h1>
            <h2 className="text-5xl font-bold">
              Search Your Job<br />
              & Join Our Team
            </h2>
          </div>

          {/* Filter Controls */}
          <div className="flex gap-4 justify-center">
            <select 
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="p-3 rounded-md bg-white text-black min-w-[200px]"
            >
              <option value="">Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>

            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 rounded-md bg-white text-black min-w-[200px]"
            >
              <option value="">Category</option>
              <option value="planning">Planning</option>
              <option value="accounting">Accounting</option>
              <option value="motion">Motion Graphics</option>
            </select>

            <select 
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="p-3 rounded-md bg-white text-black min-w-[200px]"
            >
              <option value="">Experience Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Modified Job Listings Layout */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-8">
          {/* Left Side - Fixed Job List */}
          <div className="w-1/3">
            {jobListings.map((job, index) => (
              <div 
                key={index} 
                className="mb-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJobIndex(index)}
              >
                <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {job.type}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {job.level}
                  </p>
                </div>
                <div className="mt-4">
                  <button 
                    className="text-red-500 text-sm font-medium"
                  >
                    Details {'>'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Details Panel */}
          <div className="w-2/3 border border-gray-200 rounded-lg p-8">
            {selectedJobIndex !== null ? (
              <>
                <h3 className="text-2xl font-bold mb-4">{jobListings[selectedJobIndex].title}</h3>
                <p className="text-gray-600 mb-6">{jobListings[selectedJobIndex].description}</p>
                
                <h4 className="font-bold mb-6">WHAT WILL YOU DO?</h4>
                {Object.entries(jobListings[selectedJobIndex].responsibilities || {}).map(([category, items], idx) => (
                  <div key={idx} className="mb-6">
                    <p className="font-semibold mb-3">{`${idx + 1}. ${category}`}</p>
                    <ul className="list-none space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded">
                  Apply Now
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a job to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers; 