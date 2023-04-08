import React, {Component} from 'react';
import './index.scss';

type Props = {
    syncedCount: number
    unsyncedCount: number
}

class NodeText extends Component<Props> {
    render() {

        const {syncedCount, unsyncedCount} = this.props
        const totalCount = syncedCount + unsyncedCount
        const syncedRate = syncedCount / totalCount * 100
        const unsyncedRate = unsyncedCount / totalCount * 100

        return (
            <div className={'NodeText'}>
                <div className={'Blue'}>
                    <p className={'TextNormal'}>Node count</p>
                    <p className={'TextStrong'}>{totalCount}</p>
                </div>

                <br/><br/>

                <div className={'Green'}>
                    <p className={'TextNormal'}>Percentage of network synced</p>
                    <p className={'TextStrong'}>{syncedRate}%</p>
                </div>

                <br/><br/>

                <div className={'Red'}>
                    <p className={'TextNormal'}>Percentage of network unsynced</p>
                    <p className={'TextStrong'}>{unsyncedRate}%</p>
                </div>

            </div>
        );
    }
}

export default NodeText;