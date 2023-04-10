import React, {Component} from 'react';
import './index.scss'

type Props = {
    countryCount: number
    top5Countries: [string, number][]
}

class CountryText extends Component<Props> {
    render() {

        const {countryCount, top5Countries} = this.props

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
                        {top5Countries.map((value, index) => (
                            <li className={'CountryListItem'}>
                                <span>{index + 1}. {value[0]}</span>
                                <span>{value[1]}({(value[1] / countryCount * 100).toFixed(2)}%)</span>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        );
    }
}

export default CountryText;