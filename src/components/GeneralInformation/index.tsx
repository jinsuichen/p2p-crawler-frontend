import React, {Component} from 'react';
import Title from "../Title";
import NodeText from "./NodeText";
import NodeChart from "./NodeChart";

type Props = {
    syncedCount: number
    unsyncedCount: number
}

class GeneralInformation extends Component<Props> {

    render() {

        let {syncedCount, unsyncedCount} = this.props

        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'General Information'}/>
                <div style={{display: "flex"}}>
                    <NodeText syncedCount={syncedCount} unsyncedCount={unsyncedCount}/>
                    <NodeChart syncedCount={syncedCount} unsyncedCount={unsyncedCount}/>
                </div>
            </div>
        );
    }
}

export default GeneralInformation;