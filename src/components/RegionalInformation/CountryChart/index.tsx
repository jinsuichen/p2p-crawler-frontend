import React, {Component} from 'react';
import {GeoJSON, MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './index.scss'
import '../../../types/global.d.ts'
import {GeoJsonObject} from "geojson";


type Props = {
    nodeRecords: NodeRecord[]
}

type States = {
    geoJson: GeoJsonObject | null
}

class ContourMap extends Component<Props, States> {

    constructor(props: Props) {
        super(props);

        this.state = {
            geoJson: null
        };

        this.style = this.style.bind(this)
    }

    async getGeoJson() {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
            );
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }


    getColor(country: string) {

        const {nodeRecords} = this.props
        const d = nodeRecords.filter(item => {
            return item.country === country
        }).length

        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
                d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                        d > 50 ? '#FD8D3C' :
                            d > 20 ? '#FEB24C' :
                                d > 10 ? '#FED976' :
                                    d > 0 ? '#ffecb8' :
                                        'grey';
    }

    style(feature: any) {
        const color = this.getColor(feature.properties.name)
        return {
            fillColor: color,
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        }
    }

    async componentDidMount() {
        const geoJson = await this.getGeoJson()
        this.setState({
            geoJson: geoJson
        })
    }

    render() {

        const {geoJson} = this.state

        if (geoJson === null) {
            return <div></div>
        }

        return (
            <div className={'CountryChart'}>
                <MapContainer center={[40, 50]} zoom={2} style={{height: '40vh'}}
                              scrollWheelZoom={false}
                              zoomControl={false}
                              doubleClickZoom={false}
                              maxBounds={[[-90, -180], [90, 180]]}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <GeoJSON
                        data={geoJson}
                        style={this.style}
                        onEachFeature={(feature, layer) => {
                            layer.on('click', () => {
                                console.log('Clicked on feature:', feature);
                            });
                        }}
                    />
                </MapContainer>
            </div>
        );
    }


}

export default ContourMap;
