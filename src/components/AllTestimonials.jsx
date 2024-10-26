import React from "react";
import Testimonials from "../components/Testimonials";

const data = [
  {
    personName: "Rakesh Bansal",
    profile: "Marketing Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam ducimus perferendis impedit laborum, facilis dignissimos! Ullam minus cumque quo.",
  },
  {
    personName: "Vimal Kumar",
    profile: "Data Analyst",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
];

const AllTestimonials = () => {
  return (
    <div className="bg-banner1 bg-cover bg-center">
      <Testimonials data={data} />
    </div>
  );
};

export default AllTestimonials;
