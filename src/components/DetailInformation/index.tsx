import React, {Component} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import './index.scss'
import Title from "../Title";

type Props = {
    nodeRecords: Array<NodeRecord>
}

class DetailInformation extends Component<Props> {

    render() {

        const columns: GridColDef[] = [
            {field: 'id', headerName: 'ID', width: 200},
            {field: 'accessTime', headerName: 'Access Time', width: 180},
            {field: 'address', headerName: 'Address', width: 150},
            {field: 'country', headerName: 'Country', width: 150},
            {field: 'clients', headerName: 'Client', width: 150},
            {field: 'os', headerName: 'OS', width: 150},
        ];

        console.log(this.props.nodeRecords)


        return (
            <div style={{margin: "0 auto 0", width: '65%'}}>
                <Title message={'All Nodes'}/>
                <div className={'DetailInformation'}>
                    <DataGrid
                        style={{paddingLeft: '20px'}}
                        rows={this.props.nodeRecords}
                        columns={columns}
                        pageSizeOptions={[25, 100]}
                    />
                </div>
            </div>

        );
    }
}

export default DetailInformation;