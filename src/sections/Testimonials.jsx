import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  // const stickyHeaderRef = useRef(null);
  // const parentSectionRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const stickyHeader = stickyHeaderRef.current;
  //     const parentSection = parentSectionRef.current;
  //     const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  //
  //     if (!stickyHeader || !parentSection || isMobile) {
  //       stickyHeader.style.width = ""; // Reset width for mobile
  //       stickyHeader.classList.remove("sticky");
  //       return;
  //     }
  //
  //     const parentTop = parentSection.offsetTop;
  //     const parentBottom = parentTop + parentSection.offsetHeight;
  //     const scrollPosition = window.scrollY;
  //
  //     if (scrollPosition > parentTop && scrollPosition < parentBottom) {
  //       stickyHeader.style.width = `${stickyHeader.offsetWidth}px`; // Set fixed width
  //       stickyHeader.classList.add("sticky");
  //     } else {
  //       stickyHeader.style.width = ""; // Reset width when not sticky
  //       stickyHeader.classList.remove("sticky");
  //     }
  //   };
  //
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      // ref={parentSectionRef}
      className="relative z-2 py-24 md:py-28 lg:py-40"
    >
      <div className="container block lg:flex min-h-screen">
        <div
          // ref={stickyHeaderRef}
          id="sticky-header"
          className="testimonials_head-res top-100 left-0 z-2 mr-20 flex-300"
        >
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
