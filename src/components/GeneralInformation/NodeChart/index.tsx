import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import './index.scss';

type Props = {
    syncedCount: number
    unsyncedCount: number
}


class NodeChart extends Component<Props> {
    render() {

        const {syncedCount, unsyncedCount} = this.props

        return (
            <div className={'NodeChart'}>
                <div style={{width: '400px', paddingTop: '15px'}}>
                    <ReactEcharts option={ {
                        color: ['#E4665C','#10B981'],
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            top: '0%',
                            left: 'center',
                            textStyle: {
                                color: 'white'
                            },
                            // itemStyle: {
                            //     // color: ['#10B981','#E4665C']
                            //     color: '#10B981'
                            // }
                        },
                        series: [
                            {
                                name: 'Access From',
                                type: 'pie',
                                radius: ['30%', '70%'],
                                avoidLabelOverlap: true,
                                itemStyle: {
                                    borderRadius: 10,
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                label: {
                                    show: false,
                                    position: 'center',
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        fontSize: 40,
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                data: [
                                    { value: unsyncedCount, name: 'unsynced' },
                                    { value: syncedCount, name: 'synced' },
                                ]
                            }
                        ]
                    }} />
                </div>
            </div>
        );
    }
}

export default NodeChart;