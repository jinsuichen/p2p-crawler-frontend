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
}

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            nodeRecords: []
        };

    }


    async componentDidMount() {

        try {
            const response = await api.get("/nodeRecords");
            this.setState({
                nodeRecords: response.data
            })
        } catch (error) {
            console.error(error);
        }

    }

    render() {

        const {nodeRecords} = this.state

        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <GeneralInformation nodeRecords={nodeRecords}/>
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