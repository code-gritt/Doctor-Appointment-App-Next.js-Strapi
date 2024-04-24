import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // animation duration
  easing: "ease-out", // animation easing function
  once: true, // animate only once, not on every scroll event
});
