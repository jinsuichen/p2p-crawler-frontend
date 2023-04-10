import React, {Component} from 'react';
import GeneralInformation from "./components/GeneralInformation";
import RegionalInformation from "./components/RegionalInformation";
import './types/global.d.ts'
import NavBar from "./components/NavBar";
import DetailInformation from "./components/DetailInformation";
import StatisticsInformation from "./components/StatisticsInformation";
import Footer from "./components/Footer";

class App extends Component {

    render() {


        const nodeRecordsTest = []
        for (let i = 0; i < 400; i++) {
            const nodeRecordTest: NodeRecord = {
                id: '000021e866f29b45029cb2f787844567225fa4f75bdd872028b48297e2496b1d5d681f9945f6c1157806da5ae6dc086bee3ed057d30a097a91bde4fcaf6c35b1' + i,
                seq: 1,
                accessTime: '2023-04-06 17:08:04',
                address: '34.228.185.198',
                connectAble: true,
                neighborCount: 1,
                country: 'China',
                city: '1',
                clients: 'nethermind',
                os: 'linux',
                clientsRuntime: '1',
                networkID: 1,
                totalDifficulty: '1',
                headHash: '1',
            }
            nodeRecordsTest.push(nodeRecordTest)
        }

        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <GeneralInformation syncedCount={469} unsyncedCount={263}/>
                    <RegionalInformation nodeRecords={nodeRecordsTest}/>
                    <StatisticsInformation nodeRecords={nodeRecordsTest}/>
                    <DetailInformation nodeRecords={nodeRecordsTest}/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </>
        );
    }
}

export default App;