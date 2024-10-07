import "../styles/styles.css";
import "@picocss/pico/css/pico.min.css";
// Add imports here
import Aos from "aos";
import "aos/dist/aos.css";
console.log("What?");
if (typeof window !== "undefined") {
  // Put code that runs ONLY in the browser here -- this is most likely where
  Aos.init();
  // MOST of your code should go.
  console.log("Hello World, from main.js");
  //
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}