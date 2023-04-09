import React, {Component} from 'react';
import GeneralInformation from "./components/GeneralInformation";
import RegionalInformation from "./components/RegionalInformation";
import './types/global.d.ts'
import NavBar from "./components/NavBar";

class App extends Component {

    render() {

        const nodeRecordTest: NodeRecord = {
            id: '1',
            seq: 1,
            accessTime: '1',
            address: '1',
            connectAble: true,
            neighborCount: 1,
            country: 'China',
            city: '1',
            clients: '1',
            os: '1',
            clientsRuntime: '1',
            networkID: 1,
            totalDifficulty: '1',
            headHash: '1',
        }

        const nodeRecordsTest = [nodeRecordTest]

        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <GeneralInformation syncedCount={469} unsyncedCount={263}/>
                    <RegionalInformation nodeRecords={nodeRecordsTest}/>
                </div>
            </>
        );
    }
}

export default App;