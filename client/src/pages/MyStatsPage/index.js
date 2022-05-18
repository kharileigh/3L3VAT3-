import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
;
import './style.css';
import monkey from '../../images/monkey.png';


function MyStatsPage() {

  return (

      <div className="stats-main-container">

        
           <div className="stats-left-container">
              
             
              
                      <Card className="stats-card">
                          <Card.Body className="stats-card-body">
                              <Card.Img src={monkey} className="avatar" width="100" height="100" alt="User Image" />
                              <Card.Text>
                                <h2>Battles: 578 </h2>
                                <h4>Current Score: 25, 567</h4>
                                <h4>Categories: 
                                    <ul>
                                      <li>Science & Nature</li>
                                      <li>History</li>
                                      <li>Georgraphy</li>
                                    </ul> 
                                </h4>
                              </Card.Text>
                          </Card.Body>
                          <Card.Header className="stats-card-header">
                            <h2>USERNAME</h2></Card.Header>
                            
                      </Card>
                
            
          </div>


          <div className='stats-right-container'>

            <Container fluid>
              
            <h2 className="stats-h2"> TOP USERS </h2>
              
              <Row>
                <Col md={4} className="stats-image-on-left">
                  <img src={monkey} className="avatar" width="100" height="100" alt="User Image" />
                    
                </Col>

                <Col md={8} className="stats-text-on-right">
                    <div className='stats-column'>
                        
                          <h3>USERNAME</h3>
                          <h5>Battles: 578 </h5>
                          <h6>Current Score: 25, 567</h6>   
                    </div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="stats-image-on-left">
                  <img src={monkey} className="avatar" width="100" height="100" alt="User Image" />
                    
                </Col>

                <Col md={8} className="stats-text-on-right">
                    <div className='stats-column'>
                        
                          <h3>USERNAME</h3>
                          <h5>Battles: 578 </h5>
                          <h6>Current Score: 25, 567</h6>   
                    </div>
                </Col>
              </Row>


            </Container>    
            

          </div>
            
              
      </div>
  )


}


export default MyStatsPage;