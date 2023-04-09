import React, {Component} from 'react';
import GeneralInformation from "./components/GeneralInformation";
import RegionalInformation from "./components/RegionalInformation";

class App extends Component {

    render() {
        return (
            <div style={{display: "flex", flexDirection: 'column'}}>
                <GeneralInformation syncedCount={469} unsyncedCount={263}/>
                <RegionalInformation countryCount={92}/>
            </div>
        );
    }
}

export default App;