import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../includes/header'
import Container from 'react-bootstrap/Container'
import CardsView from '../includes/cardsView'
import ProductStore from '../stores/ProductStore'
import InitializeActions from '../actions/InitializeProductActions'
import Navbar from 'react-bootstrap/Navbar'

export default class AllProductsPage extends React.Component {
    constructor(props) {
      super(props)
      this._onChange = this._onChange.bind(this)
      this.state = {
        products: ProductStore.getAllProducts()
      }

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange)
        InitializeActions.initProducts()
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({ products: ProductStore.getAllProducts() })
    }

    render() {
        return (
            <div>
                <Header />
                <CardsView products={this.state.products} />
                <footer>
                    <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                        <Container>
                            <Navbar.Brand href="#"><a href="https://www.linkedin.com/in/darlington-chukwuemeka-nwanna-6916451a8/">Darlington Emeka</a></Navbar.Brand>
                        </Container>
                    </Navbar>
                </footer>
            </div>
        );
    }
}