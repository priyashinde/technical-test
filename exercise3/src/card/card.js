import React, { Component } from 'react';
import styled from 'styled-components';
import CartDetails from '../CartDetails/CartDetails';

class Card extends Component {
    state = {}
    render() {

        const Topcontainer = styled.section`
            padding: 4em;
        `;

        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                <div className='topDv'></div>
                    <Topcontainer>
                    </Topcontainer>
                    <CartDetails />
                </div>
            </div>
        );
    }
}

export default Card;