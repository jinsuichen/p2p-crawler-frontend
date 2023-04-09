import React, {Component} from 'react';
import './index.scss'

type Props = {
    countryCount: number
}

class CountryText extends Component<Props> {
    render() {
        const {countryCount} = this.props
        return (
            <div className={'CountryText'}>
                <div>
                    <p className={'CountryTextNormal'}>Network participants from</p>
                    <p className={'CountryTextStrong'}>{countryCount} countries</p>
                </div>

                <br/><br/>

                <div>
                    <p className={'CountryTextNormal'}>Top 5 countries</p>
                    <ul className={'CountryList'}>
                        <li className={'CountryListItem'}>
                            <span>1. China</span>
                            <span>5463(24.4%)</span>
                        </li>
                        <li className={'CountryListItem'}>
                            <span>2. China</span>
                            <span>5463(24.4%)</span>
                        </li>
                        <li className={'CountryListItem'}>
                            <span>3. China</span>
                            <span>5463(24.4%)</span>
                        </li>
                        <li className={'CountryListItem'}>
                            <span>4. China</span>
                            <span>5463(24.4%)</span>
                        </li>
                        <li className={'CountryListItem'}>
                            <span>5. China</span>
                            <span>5463(24.4%)</span>
                        </li>
                    </ul>
                </div>


            </div>
        );
    }
}

export default CountryText;