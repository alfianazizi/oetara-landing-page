import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { getWork } from "../../api/work";

const OurWork = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [list, setList] = useState([]);

  const handleWork = () => {
    navigate("/work");
  };

  const fetchWork = async () => {
    try {
      const result = await getWork();
      const all = [];
      if (result && result.length > 0) {
        result
          .filter((item) => item.acf.highlight)
          .forEach((item) => {
            all.push({
              title: item.title.rendered,
              image: item.acf.image_header,
              slug: item.slug,
            });
          });
        setList(all);
      }
    } catch (err) {
      console.error("Error fetching work:", err);
    }
  };

  useEffect(() => {
    fetchWork();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="absolute container top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[90%]">
      <div className="w-full mx-auto px-10 lg:px-[5rem]">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, translateY: "-2rem" }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-[2rem] lg:text-[3rem] text-center font-[500] text-[#EC1C24] mb-8"
        >
          Our Work
        </motion.p>
        <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-3 lg:gap-8 justify-items-center">
          {list.slice(0, 6).map((item, key) => (
            <motion.div
              ref={ref}
              key={key}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5, delay: 0.5 * key },
                    }
                  : {}
              }
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center w-[100%] relative group"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  // Check for mobile resolution
                  setTimeout(
                    () => navigate(`/work/detail-work/${item.slug}`),
                    1000
                  ); // 1 seconds delay
                } else {
                  navigate(`/work/detail-work/${item.slug}`); // No delay for larger screens
                }
              }}
            >
              {item.image !== null && item.image !== "" ? (
                <img
                  src={item.image}
                  alt="work_image"
                  className="rounded-xl shadow-image object-cover h-[100%]"
                />
              ) : (
                <svg
                  className="object-cover rounded-xl shadow-image"
                  viewBox="0 0 290 227"
                >
                  <rect width="100%" height="100%" fill="lightgray" />
                  <text
                    x="145"
                    y="113.5"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="gray"
                    fontSize="14"
                  >
                    Image Work
                  </text>
                </svg>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 opacity-0 rounded-xl bg-black/60 group-hover:opacity-100">
                <p className="font-medium md:text-xl md:mb-4">
                  {item.title.replace(/&#8211;/g, "–")}
                </p>
                {item.desc && (
                  <p className="text-sm md:text-lg md:mb-4">{item.desc}</p>
                )}
                <span className="md:mt-2 md:text-2xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <motion.button
            ref={ref}
            initial={{ opacity: 0, translateY: "-2rem" }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 * list.length }}
            className="py-2 px-10 bg-white rounded-full font-[600] flex items-center shadow-2xl hover:bg-gray-50 transition-colors"
            onClick={() => handleWork()}
          >
            <span className="lg:text-[18px] mr-5">See all our work</span>
            <FaChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
