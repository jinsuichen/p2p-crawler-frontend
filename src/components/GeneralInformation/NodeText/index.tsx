import React, {Component} from 'react';
import './index.scss';

type Props = {
    syncedCount: number
    unsyncedCount: number
    recordsCount: number
}

class NodeText extends Component<Props> {
    render() {

        const {syncedCount, unsyncedCount,recordsCount} = this.props
        const totalCount = syncedCount + unsyncedCount
        const syncedRate = syncedCount / totalCount * 100
        const unsyncedRate = unsyncedCount / totalCount * 100

        return (
            <div className={'NodeText'}>

                <div className={'Blue'}>
                    <p className={'NodeTextNormal'}>Node Records Count</p>
                    <p className={'NodeTextStrong'}>{recordsCount}</p>
                </div>

                <div className={'Purple'}>
                    <p className={'NodeTextNormal'}>Connectable Count</p>
                    <p className={'NodeTextStrong'}>{totalCount}</p>
                </div>

                <br/><br/>

                <div className={'Green'}>
                    <p className={'NodeTextNormal'}>Percentage of network synced</p>
                    <p className={'NodeTextStrong'}>{syncedRate}%</p>
                </div>

                <br/><br/>

                <div className={'Red'}>
                    <p className={'NodeTextNormal'}>Percentage of network unsynced</p>
                    <p className={'NodeTextStrong'}>{unsyncedRate}%</p>
                </div>

            </div>
        );
    }
}

export default NodeText;
