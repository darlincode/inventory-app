import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '../css/footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                <Container>
                    <Navbar.Brand href="#"><a href="https://www.linkedin.com/in/darlington-chukwuemeka-nwanna-6916451a8/">Darlington Emeka</a></Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer