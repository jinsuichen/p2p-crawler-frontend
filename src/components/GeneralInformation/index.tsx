import React, {Component} from 'react';
import Title from "../Title";
import NodeText from "./NodeText";
import NodeChart from "./NodeChart";

type Props = {
    nodeRecords: Array<NodeRecord>
    recordsCount: number
}

class GeneralInformation extends Component<Props> {

    render() {

        const {nodeRecords,recordsCount} = this.props

        const totalCount = nodeRecords.length
        //TODO: Caclulate the syncedCount and unsyncedCount base on access time
        const syncedCount = Math.floor(totalCount * 0.64)
        const unsyncedCount = totalCount - syncedCount

        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'General Information'}/>
                <div style={{display: "flex"}}>
                    <NodeText syncedCount={syncedCount} unsyncedCount={unsyncedCount} recordsCount={recordsCount}/>
                    <NodeChart syncedCount={syncedCount} unsyncedCount={unsyncedCount}/>
                </div>
            </div>
        );
    }
}

export default GeneralInformation;
