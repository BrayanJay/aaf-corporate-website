import React from "react";
import Testimonials from "../components/Testimonials";
import { useTranslation } from "react-i18next";

const AllTestimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });
  return (
    <div className="bg-banner1 bg-cover bg-center" data-aos="zoom-in">
      <Testimonials data={testimonials} />
    </div>
  );
};

export default AllTestimonials;
