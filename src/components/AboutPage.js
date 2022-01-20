import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Header from '../includes/header'
import Navbar from 'react-bootstrap/Navbar'
import TopViewedProductsPage from './TopViewedProductsPage'

const AboutPage = () => {
    return(
        <div>
            <Header />
            <Carousel className="carousel slide container">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/img1/900/350"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Lots of Products</h3>
                    <p>There are so many products for you to choose from, in our inventory.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/img2/900/350"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Customize the Fields</h3>
                    <p>You can customize the Fields and view only the data that you wish to look.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/img3/900/350"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Top Viewed Products</h3>
                    <p>See our top viewed products, gathered from real time data, which'll help you choose.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card border="light" id="about">
                            <h1>About</h1>
                            <p>Products Inventory <br />
                            Inventory management deals with the processes that go into ordering, storing and profiting from goods traveling down the supply chain from manufacturer to customer. This sounds simple, but there are many critical daily processes that go into maintaining an organized and efficient inventory. Keeping a balanced equilibrium between all the moving parts of a storage system is difficult. In fact, a normal retail establishment’s inventory is only accurate about 63% of the time.

Combatting statistics like this requires a well thought out inventory management strategy and software platform. Depending on the firm, the items they store, the regulations they have to follow and the size of their operation, they may require multiple plans and systems to keep things running. Let’s start with some of the different types of inventory and how they can affect formulating a storage strategy.
                            </p>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }} border="info">
                            <Card.Body>
                              <Card.Title>Welcome!</Card.Title>
                              <Card.Text>
                               Already a User?
                              </Card.Text>
                              <Button variant="primary" href="/signIn">Sign in</Button>
                              <Card.Text>
                               New User?
                              </Card.Text>
                              <Button variant="primary" href="/register">Register</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <TopViewedProductsPage />
            <footer>
            <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                <Container>
                    <Navbar.Brand href="#"><a href="https://www.linkedin.com/in/darlington-chukwuemeka-nwanna-6916451a8/">Darlington Emeka </a></Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
        </div>
    )
}

export default AboutPage