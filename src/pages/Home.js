import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const Home = () => {
  return (
    <div>
      <section id="home" className="py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to FITPUY</h1>
          <p className="lead">Your one-stop destination for fitness tracking and planning.</p>
          <Link to="/dashboard" className="btn btn-outline-secondary">Start Tracking</Link> {/* Use Link component */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h4 className="mb-4 text-center">Key Features</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">BMI Calculator</h5>
                  <p className="card-text">Calculate your Body Mass Index (BMI) quickly and easily using our BMI calculator.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Personalized Diet Plans</h5>
                  <p className="card-text">Create customized diet plans based on your BMI, fitness goals, and dietary preferences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Fitness Tracking</h5>
                  <p className="card-text">Track your progress over time with our fitness tracking tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h4 className="mb-4 text-center">About Us</h4>
          <p className="text-center">At FITPUY, we are passionate about helping you achieve your fitness goals. Our tools allow you to calculate your BMI and create personalized diet plans tailored to your needs, ensuring you stay on track towards a healthier lifestyle.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
