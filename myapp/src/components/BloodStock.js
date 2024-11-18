import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTint } from 'react-icons/fa';
import '../styles/BloodStock.css';

const BloodStock = () => {
  const [bloodStock, setBloodStock] = useState({});
  const [bloodGroup, setBloodGroup] = useState('');
  const [unit, setUnit] = useState('');
  const bloodGroups = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:8000/api/update-stock/', { blood_group: bloodGroup, units: unit })
      .then(response => {
        setBloodStock(prevState => ({
          ...prevState,
          [bloodGroup]: unit
        }));
        setBloodGroup('');
        setUnit('');
      })
      .catch(error => {
        console.error('There was an error updating the stock!', error);
      });
  };

  return (
    <div className="container mb-5">
      <br /><br />
      <div className="row">
        {bloodGroups.map((group, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-light">
              <div className="card-body">
                <div className="blood">
                  <h2>{group} <FaTint /></h2>
                </div>
                <br /><br />
                <div>
                  {bloodStock[group] !== undefined ? `${bloodStock[group]} ml` : 'Data not available'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <br />
      <h3 className="text-center">Update Blood Unit (ml)</h3>
      <br />
      <div className="d-flex justify-content-center align-items-center mb-4">
        <form className="form-inline" onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
          <div className="form-group">
            <select
              name="bloodgroup"
              className="form-control"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              style={{ width: '200px' }}
            >
              <option disabled value="">Choose a Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="unit"
              placeholder="*** ml"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{ width: '200px' }}
            />
          </div>
          <button type="submit" className="btn btn-danger">Update Stock</button>
        </form>
      </div>
    </div>
  );
};

export default BloodStock;