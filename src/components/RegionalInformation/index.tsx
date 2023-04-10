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

        const distinctCountries: Map<string, number> = new Map();
        nodeRecords.forEach(item => {
            distinctCountries.set(item.country, 0)
        })
        nodeRecords.forEach(item => {
            distinctCountries.set(item.country, distinctCountries.get(item.country) as number + 1)
        })

        // country count
        const countryCount = distinctCountries.size

        // top 5 countries
        const mapArray = Array.from(distinctCountries);
        mapArray.sort((a, b) => b[1] - a[1]);
        const topFive = mapArray.slice(0, 5);


        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'Regional Information'}/>
                <div style={{display: 'flex'}}>
                    <CountryText countryCount={countryCount} top5Countries={topFive} nodeCount={nodeRecords.length}/>
                    <CountryChart nodeRecords={nodeRecords}/>
                </div>
            </div>
        );
    }
}

export default RegionalInformation;