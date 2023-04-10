import React, {Component} from 'react';
import Title from "../Title";
import ClientChart from "./ClientChart";
import OsChart from "./OsChart";

type Props = {
    nodeRecords: Array<NodeRecord>
}
class StatisticsInformation extends Component<Props> {
    render() {
        const {nodeRecords} = this.props

        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'Node Statistics'}/>
                <div style={{display: "flex"}}>
                    <ClientChart nodeRecords={nodeRecords}/>
                    <OsChart nodeRecords={nodeRecords}/>
                </div>
            </div>
        );
    }
}

export default StatisticsInformation;