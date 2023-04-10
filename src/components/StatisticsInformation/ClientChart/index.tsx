import React, {Component} from 'react';
import './index.scss'
import ReactEcharts from "echarts-for-react";

type Props = {
    nodeRecords: Array<NodeRecord>
}

class ClientChart extends Component<Props> {
    render() {

        const {nodeRecords} = this.props

        const keys = ['geth', 'erigon', 'nethermind', 'others']
        const map = new Map()
        keys.forEach(item => map.set(item, 0))

        nodeRecords.forEach(item => {
            let index = keys.indexOf(item.clients)
            if(index == -1) index = keys.length - 1

            const key = keys[index]
            map.set(key, map.get(key) + 1)
        })

        const values: number[] = []
        keys.forEach(item => {
            values.push(map.get(item))
        })

        return (
            <div className={'ClientChart'}>
                <h3 style={{color: 'white'}}>Client type distribution</h3>
                <div style={{width: '100%'}}>
                    <ReactEcharts option={{
                        xAxis: {
                            type: 'category',
                            data: keys
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: values,
                                type: 'bar'
                            }
                        ]
                    }} />
                </div>
            </div>
        );
    }
}

export default ClientChart;