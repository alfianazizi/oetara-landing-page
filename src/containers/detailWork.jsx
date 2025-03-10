import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { getWorkById } from "../api/work";
import CountUp from "react-countup";
import { getClientById } from "../api/navigator";
import { FaChevronLeft } from "react-icons/fa6";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

const DetailWork = () => {
  const { slug } = useParams();

  const [detail, setDetail] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [photo, setPhoto] = useState("");
  const [campaign, setCampaign] = useState("");
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleDetailWork();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 120) {
  //       console.log("Scrolled past 120px");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   if (isVisible) {
  //     const playPromise = videoRef.current?.play();
  //     if (playPromise !== undefined) {
  //       playPromise.catch((error) => console.error("Playback prevented:", error));
  //     }
  //   } else {
  //     videoRef.current?.pause();
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isVisible]);

  const handleDetailWork = async () => {
    setIsLoad(true);
    try {
      const result = await getWorkById(slug);
      setDetail(result[0]);
      const client_id = result[0].acf.client[0].ID;
      let work_gallery = result[0].acf.work_gallery;
      const uniqueSubtypes = work_gallery.reduce((acc, item) => {
        if (!acc.includes(item.subtype)) {
          acc.push(item.subtype);
        }
        return acc;
      }, []);
      setCampaign(uniqueSubtypes[0]);
      setIsLoad(false);
      await handleClient(client_id);
      setTimeout(() => {
        handleVideo();

        if (videoRef.current.muted) {
          // Alert the user that unmuting is not supported in this browser
          alert(
            "This page detected a video and your browser does not support unmuting the video automatically. Click below to unmute the video."
          );
        }
      }, 1000);
    } catch (err) {
      setIsLoad(false);
    }
  };

  const handleClient = async (id) => {
    const result = await getClientById(id);
    try {
      setPhoto(result.acf.logo.url);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVideo = async () => {
    const videoElement = videoRef.current;
    // console.log(videoElement)
    if (!videoElement) return;

    setIsVisible(true)

    // IntersectionObserver configuration
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play(); // Play the video when it's in the viewport
        } else {
          videoElement.pause(); // Pause when out of view
          console.log("pause");
          // videoElement.muted = true; // Mute when out of view
        }
      },
      {
        threshold: 0.001, // 50% of the video needs to be visible in the viewport
      }
    );
    console.log("observer", observer);

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log(entry)
  //       if (entry.isIntersecting) {
  //         console.log(1)
  //         setIsVisible(true);
  //         // setIsMuted(false); // Unmute when visible
  //         if (videoRef.current) {
  //           const playPromise = videoRef.current.play();
  //           if (playPromise !== undefined) {
  //             playPromise.catch((error) => console.error("Autoplay prevented:", error));
  //           }
  //         }
  //       } else {
  //         console.log(0)
  //         setIsVisible(false);
  //         // setIsMuted(true); // Mute when not visible
  //         videoRef.current?.pause();
  //       }
  //     },
  //     { threshold: 0.5 } // Video must be at least 50% visible
  //   );

  //   if (videoRef.current) observer.observe(videoRef.current);

  //   return () => {
  //     if (videoRef.current) observer.unobserve(videoRef.current);
  //   };
  // }, []);

  const handleUnMuted = () => {
    setIsMuted(false);
    setIsVisible(false)
    // videoRef.current?.play()

    // if (videoRef.current) {
    // }
  };

  // const handleVisible = (isVisible) => {
  //   setIsVisible(isVisible);
  //   if (videoRef.current) {
  //     if (isVisible) {
  //       const playPromise = videoRef.current.play();
  //       setIsMuted(false);
  //       if (playPromise !== undefined) {
  //         playPromise.catch((error) =>
  //           console.error("Autoplay prevented:", error)
  //         );
  //       }
  //     } else {
  //       videoRef.current.pause();
  //       setIsMuted(true);
  //     }
  //   }
  // };

  // const handleVisible = (isVisible) => {
  //   setIsVisible(isVisible);
  //   if (isVisible) {
  //     setIsMuted(false); // Unmute saat video terlihat
  //   } else {
  //     setIsMuted(true); // Mute saat video tidak terlihat
  //   }
  //   // if (isVisible) {
  //   //   console.log('Is Visible :', isVisible)
  //   //   setTimeout(() => {
  //   //     // handleUnMuted()
  //   //   }, 3000)
  //   // }
  // }

  return (
    <div className="mx-auto py-8 md:py-0">
      <div className="absolute inset-0 py-12 z-[10]">
        <div className="hidden md:flex justify-center items-center mt-8 lg:mt-12">
          <Link
            to="/work"
            className="container px-5 md:px-10 flex items-center gap-2 text-white font-['montserrat-bold'] md:text-[1.5rem] mb-8 hover:text-[#C01C30]"
          >
            <FaChevronLeft /> Case Study
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[120px] md:h-[300px] lg:h-[30vh] overflow-hidden mt-8 md:mt-0">
        {!isLoad ? (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{
              backgroundImage:
                "acf" in detail &&
                "image_header" in detail.acf &&
                detail.acf.image_header !== ""
                  ? `url(${detail.acf.image_header})`
                  : ``,
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-cover bg-center">
            <svg className="w-[100%]" viewBox="0 0 290 227">
              <rect width="100%" height="100%" fill="gainsboro" />
              <text
                x="145"
                y="113.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="gray"
                fontSize="28"
              >
                Cover Header
              </text>
            </svg>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <div className="container">
          <div className="relative px-7 flex items-center gap-6 -mt-[3rem] md:-mt-[8rem]">
            <div className="flex items-center lg:justify-center flex-wrap md:flex-nowrap gap-2 md:gap-8">
              <div
                className="w-auto flex items-center bg-white rounded-[10%]"
                style={{ boxShadow: "rgba(149, 157, 165, 0.7) 0px 8px 24px" }}
              >
                {photo !== "" ? (
                  <img
                    src={photo}
                    alt="avatar"
                    className="w-32 md:w-[16rem] object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <svg
                    className="w-32 md:w-[16rem] -mt-10 object-cover rounded-lg shadow-lg"
                    viewBox="0 0 290 227"
                  >
                    <rect width="100%" height="100%" fill="lightgray" />
                    <text
                      x="145"
                      y="113.5"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="gray"
                      fontSize="28"
                    >
                      Image
                    </text>
                  </svg>
                )}
              </div>
              <div className="w-[100%] md:w-auto mt-5 md:mt-[8.5rem]">
                <h1 className="text-2xl lg:text-[35pt] leading-[1.2] font-['montserrat-bold'] mb-3">
                  {"acf" in detail && detail.acf.title}
                </h1>
                <h2 className="text-2xl lg:text-[35pt] leading-[1.1] font-['montserrat-bold']">
                  {"title" in detail &&
                  detail.title.rendered.indexOf("/&#8211;/g") === -1
                    ? "for Client " + detail.title.rendered.split(/&#8211;/g)[0]
                    : ""}
                </h2>
              </div>
            </div>
          </div>

          {/* Metrics */}
          {detail && "acf" in detail && detail.acf.metric.length > 1 ? (
            <div
              className={`grid grid-cols-1 ${
                "acf" in detail && detail.acf.metric.length >= 3
                  ? "md:grid-cols-3"
                  : "acf" in detail && detail.acf.metric.length == 2
                  ? "md:grid-cols-2"
                  : "acf" in detail && detail.acf.metric.length === 1
                  ? "md:grid-cols-1"
                  : "md:grid-cols-3"
              } md:gap-8 mt-6 md:mt-12 mb-12 md:justify-items-center`}
            >
              {"acf" in detail &&
                detail.acf.metric.map((metric, index) => (
                  <div key={index} className="md:text-center px-8 py-2">
                    <div className="pb-1 md:pb-4 font-['montserrat-medium'] md:text-[18pt]">
                      {metric.metric_name}
                    </div>
                    <div className="flex flex-nowrap md:flex-wrap w-[50%] md:w-[100%] pb-3 mb:pb-0">
                      <div className="text-[#FF2935] text-4xl lg:text-[38pt] font-['montserrat-extrabold'] w-[100%]">
                        {metric.metric_type !== "number" ? (
                          metric.metric_value
                        ) : (
                          <CountUp start={0} end={metric.metric_value} />
                        )}
                      </div>
                      <div className="text-[#FF2935] font-['montserrat-bold'] lg:text-[21pt] ml-2 md:ml-0 mt-2 md:mt-3 w-[100%]">
                        {metric.metric_label}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="pt-8 md:pt-20"></div>
          )}

          {/* Content Sections */}
          <section className="mb-12 px-8">
            <h3 className="text-2xl lg:text-[2rem] font-['montserrat-semibold'] mb-4 lg:mb-6">
              Background
            </h3>
            <p
              className="md:text-lg lg:text-[1.8rem] !leading-[1.5] text-[#231F20]"
              dangerouslySetInnerHTML={
                "acf" in detail && detail.acf.background
                  ? { __html: detail.acf.background }
                  : { __html: "" }
              }
            ></p>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl lg:text-[2rem] font-['montserrat-semibold'] mb-4 lg:mb-6">
              Execution
            </h3>
            <p
              className="md:text-lg lg:text-[1.8rem] !leading-[1.5] text-[#231F20] mb-6"
              dangerouslySetInnerHTML={
                "acf" in detail && detail.acf.execution
                  ? { __html: detail.acf.execution }
                  : { __html: "" }
              }
            ></p>

            {/* Campaign Images */}
            {isVisible ? 
              <div className="text-center">
                <button
                  ref={buttonRef}
                  onClick={handleUnMuted}
                  className="relative mt-5 bg-[#C01C30] text-white px-4 py-2 rounded"
                >
                  🔊 Tap to Unmute
                </button>
              </div>
            : null}
            <div
              className={`${
                campaign === "gif"
                  ? "grid grid-cols-4 gap-2"
                  : "flex flex-wrap w-full"
              } my-12 bg-[#C01C30]/10 p-2 rounded-[10px]`}
            >
              {"acf" in detail &&
                detail.acf.work_gallery.map((item, key) => {
                  if (item.type === "video") {
                    return (
                      <video
                        key={key}
                        src={item.url}
                        controls={false}
                        // controlsList="nodownload"
                        autoPlay
                        playsInline
                        ref={videoRef}
                        className="w-full object-contain cursor-pointer"
                        muted={isMuted}
                        preload="auto"
                      ></video>
                    );
                  } else {
                    if (item.subtype === "gif") {
                      if (detail.acf.work_gallery.length < 4) {
                        const gifItems = detail.acf.work_gallery.filter(
                          (i) => i.subtype === "gif"
                        );
                        const remainingGifs =
                          gifItems.length < 4 ? 4 - gifItems.length : 0;
                        const itemsToRender =
                          remainingGifs.length >= 4
                            ? gifItems
                            : [...gifItems, ...Array(remainingGifs).fill(null)];

                        return itemsToRender.map(
                          (gifItem, index) =>
                            gifItem && (
                              <img
                                key={key + index}
                                src={gifItem.url}
                                alt={`Campaign ${gifItem}`}
                                className="w-full h-auto md:h-[50vh] object-contain md:object-cover"
                              />
                            )
                        );
                      } else {
                        return (
                          <img
                            key={key}
                            src={item.url}
                            alt={`Campaign ${key}`}
                            className="w-full h-auto md:h-[50vh] object-contain md:object-cover"
                          />
                        );
                      }
                    } else {
                      return (
                        <img
                          key={key}
                          src={item.url}
                          alt={`Campaign ${item}`}
                          className={`${
                            detail.acf.work_gallery.length === 1
                              ? "w-full"
                              : "w-1/3 p-1"
                          } 
                          h-auto md:h-[50vh] object-contain md:object-cover`}
                        />
                      );
                    }
                  }
                })}
            </div>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl lg:text-[2rem] font-['montserrat-semibold'] mb-4 lg:mb-6">
              Results
            </h3>
            <p
              className="md:text-lg lg:text-[1.8rem] !leading-[1.5] text-[#231F20] mb-6"
              dangerouslySetInnerHTML={
                "acf" in detail && detail.acf.result
                  ? { __html: detail.acf.result }
                  : { __html: "" }
              }
            ></p>
          </section>
        </div>
      </div>
    </div>
  );
};

DetailWork.propTypes = {
  id: PropTypes.string,
};

export default DetailWork;
