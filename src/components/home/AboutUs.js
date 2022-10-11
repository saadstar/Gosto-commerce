import React from "react";
import { NavLink } from "react-router-dom";
export function AboutUs() {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary mb-4 fw-bold">About Us</h1>
          <p className="lead mb-4">
            Customers want to be treated like human beings. For that to happen,
            they need to feel that they're being served by human beings. When
            finishing your About page, describe who you are as a person or a
            team, and what your personal values are. What's your company culture
            like? What bigger picture in life drives your business? Keep in mind
            a secondary audience of your company's About page consists of your
            future employees. This is another reason describing your personal
            values is a good idea — the key to your job candidates' hearts is to
            show them you have one too.
          </p>
          <NavLink className="btn btn-outline-primary bx-3" to="/about">
            Contact Us
          </NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/images/aboutus.jpg"
            alt="about us"
            height="400px"
            width="400px"
          />
        </div>
      </div>
    </div>
  );
}
