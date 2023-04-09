import React, {Component} from 'react';

import './index.scss'
import {Link} from "@mui/material";

class NavBar extends Component {
    render() {
        return (
            <div className={'NavBar'}>
                <Link href="#" underline="none"  color={'white'}  className={'Link'}>
                    {'p2p network node'}
                </Link>

                <Link href="https://github.com/jinsuichen/p2p-crawler-frontend" color={'white'} underline="none" className={'Link'}>
                    {'GitHub'}
                </Link>
            </div>
        );
    }
}

export default NavBar;