import React, {Component} from 'react';
import GeneralInformation from "./components/GeneralInformation";
import RegionalInformation from "./components/RegionalInformation";
import './types/global.d.ts'
import NavBar from "./components/NavBar";
import DetailInformation from "./components/DetailInformation";
import StatisticsInformation from "./components/StatisticsInformation";
import Footer from "./components/Footer";
import api from './services/axios'

type Props = {}

type State = {
    nodeRecords: Array<NodeRecord>
    recordsCount: number
}

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            nodeRecords: [],
            recordsCount: 0,
        };

    }


    async componentDidMount() {

        try {
            const response = await api.get("/nodeRecords");
            const recordsCount = await api.get("/allRecords");
            this.setState({
                nodeRecords: response.data,
                recordsCount: recordsCount.data
            })
        } catch (error) {
            console.error(error);
        }

    }

    render() {

        const {nodeRecords,recordsCount} = this.state

        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <GeneralInformation nodeRecords={nodeRecords} recordsCount={recordsCount}/>
                    <RegionalInformation nodeRecords={nodeRecords}/>
                    <StatisticsInformation nodeRecords={nodeRecords}/>
                    <DetailInformation nodeRecords={nodeRecords}/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </>
        );
    }
}

export default App;
