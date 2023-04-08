import React, {Component} from 'react';
import GeneralInformation from "./components/GeneralInformation";

class App extends Component {

    render() {
        return (
            <div style={{display: "flex", flexDirection: 'column'}}>
                <GeneralInformation syncedCount={469} unsyncedCount={263}/>
                {/*<Title message={'ss'}></Title>*/}
            </div>
        );
    }
}

export default App;