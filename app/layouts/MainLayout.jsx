import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Header, Footer } from 'components';

const MainLayout = ({ children }) => (
  <Grid>
    <Row>
      <Col xs={12}><Header /></Col>
    </Row>
    <Row>
      <Col xs={12}>{children}</Col>
    </Row>
    <Row>
      <Col xs={12}><Footer /></Col>
    </Row>
  </Grid>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default MainLayout;
