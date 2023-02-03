import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Api.css';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <ul style={{marginLeft:"-20px"}} >
      {data.map(item => (
        <div key={item.id}>
        <Accordion>
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='main'>
            <li>
              <h5>Contact person</h5>
              {item.name}
              </li>
            <li>
            <h5>Website</h5>
              {item.website}
            </li>
            <li>
            <h5>Company</h5>
              {item.company.name}
            </li>
            <li>
            <h5>City</h5>
              {item.address.city}
            </li>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='hidden'>
              <li>
                <h4>Person name</h4>
                {item.name}
              </li>
              <li>
                <h4>User name</h4>
                {item.username}
              </li>
              <li>
                <h4>Email</h4>
                {item.email}
              </li>
              <li>
                <h4>Phone</h4>
                {item.phone}
              </li>
              <li>
                <h4>Website</h4>
                {item.website}
              </li>
              <li>
                <h4>Company</h4>
                {item.company.name}
              </li>
              <li>
                <h4>Street</h4>
                {item.address.street}
              </li>
              <li>
                <h4>City</h4>
                {item.address.city}
              </li>
              <li>
                <h4>Zip code</h4>
                {item.address.zipcode}
              </li> 
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      ))}
    </ul>
  );
};

export default Api;






