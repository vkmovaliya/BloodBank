
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTint, FaUsers, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  const [bloodStock, setBloodStock] = useState({});
  const [stats, setStats] = useState({
    totalDonors: 0,
    totalRequests: 0,
    totalBloodUnit: 0,
    totalApprovedRequests: 0,
    totalRejectedRequests: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bloodGroups = [
    'A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'
  ];

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/bloodstock/')
      .then(response => {
        const stockData = response.data.reduce((acc, stock) => {
          acc[stock.blood_group] = stock.units;
          return acc;
        }, {});
        setBloodStock(stockData);
      })
      .catch(error => {
        console.error('There was an error fetching the blood stock!', error);
      });

    
    axios.get('http://localhost:8000/api/statistics/')
      .then(response => {
        setStats(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('There was an error fetching the statistics!', error);
        setError('Error fetching statistics data');
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      
      <div className="row">
        {bloodGroups.map((group, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card bg-light">
              <div className="card-body">
                <div className="blood">
                  <h2>{group} <FaTint /></h2>
                </div><br /><br />
                <div>
                  {bloodStock[group] !== undefined ? `${bloodStock[group]} ml` : 'Data not available'}
                </div>                            
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      
      <div className="row">
        <div className="col-sm-2">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <FaUsers style={{ color: '#1e88e5' }} />
              </div><br />
              <div>
                Available Donors <br />
                {stats.totalDonors}
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <FaSpinner style={{ color: '#efb000' }} />
              </div><br />
              <div>
                Total(D+R) Requests <br />
                {stats.totalRequests}
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <FaTint style={{ color: '#d41010' }} />
              </div><br />
              <div>
                Total Blood Units (ml) <br />
                {stats.totalBloodUnit}
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <FaCheckCircle style={{ color: 'green' }} />
              </div><br />
              <div>
                Approved Requests <br />
                {stats.totalApprovedRequests}
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <FaTimesCircle style={{ color: 'red' }} />
              </div><br />
              <div>
                Rejected Requests <br />
                {stats.totalRejectedRequests}
              </div>                            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

