import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-start text-center">
            <p className="mb-0">© 2023 FITPUY. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
