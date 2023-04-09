import React, {Component} from 'react';
import Title from "../Title";
import CountryText from "./CountryText";

type Props = {
    countryCount: number
}

class RegionalInformation extends Component<Props> {
    render() {
        const {countryCount} = this.props
        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'Regional Information'}/>
                <CountryText countryCount={countryCount}/>
            </div>
        );
    }
}

export default RegionalInformation;