import React, {Component} from 'react';
import Title from "../Title";
import CountryText from "./CountryText";
import CountryChart from "./CountryChart";

type Props = {
    nodeRecords: Array<NodeRecord>
}

class RegionalInformation extends Component<Props> {


    render() {

        const {nodeRecords} = this.props

        const distinctCountries = new Set();
        nodeRecords.forEach(item => {
            distinctCountries.add(item.country)
        })
        const countryCount = distinctCountries.size

        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'Regional Information'}/>
                <div style={{display: 'flex'}}>
                    <CountryText countryCount={countryCount}/>
                    <CountryChart nodeRecords={nodeRecords}/>
                </div>
            </div>
        );
    }
}

export default RegionalInformation;