import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailWork = ({ id }) => {
    const navigate = useNavigate();
    console.log(id);
  const metrics = [
    {
      label: "Total KOL",
      value: "15",
      unit: "KOL",
    },
    {
      label: "KPI",
      value: "500.000",
      unit: "views",
    },
    {
      label: "Result",
      value: "622.193",
      unit: "views",
    }
  ];

  const campaignResults = [
    "Media plan + KOL: Total Results (including boosted): 377.5M impressions (+42% vs. L1)",
    "Engagement Rate: 175%",
    "TikTok Hashtag Challenge: 99M impressions",
    "Press conference KinKat: Total PR Value: 8.74 billion IDR",
    "Highlight: Collaboration with Wonderful Indonesia and local UMKM"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" onClick={() => navigate(-1)}>
      <Link to="/work" className="flex items-center gap-2 text-gray-600 mb-8">
        <span>←</span> Case Study
      </Link>

      {/* Hero Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516959512470-53955cd40f40?auto=format&w=1200&q=80')`
          }}
        />
        <div className="absolute bottom-8 left-8 flex items-center gap-6">
          <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center shadow-lg">
            <img 
              src="https://logo.clearbit.com/dejavu.co.id" 
              alt="Dejavu Logo"
              className="max-w-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">Utilizing KOL services</h1>
            <h2 className="text-lg">for Client Dejavu</h2>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-red-500 text-4xl font-bold">{metric.value}</div>
            <div className="text-red-500">{metric.unit}</div>
            <div className="text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Background</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Execution</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        
        {/* Campaign Images */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={`https://picsum.photos/400/600?random=${item}`}
              alt={`Campaign ${item}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Results</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold mb-4">Data awareness and engagement:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {campaignResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

DetailWork.propTypes = {
    id: PropTypes.string
};

export default DetailWork;
