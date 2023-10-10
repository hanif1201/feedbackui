import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card reverse={false}>
      <div className="about">
        <h1>About This Project</h1>
        <p>Thsi is an app design to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to={"/"}>Back to Home</Link>
        </p>
        <p>
          <Link to={"/"}>Designed by Hanif</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
