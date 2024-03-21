// MapComponent.js
import React, { useState } from 'react';
import LandComponent from './LandComponent';
import './irrigation.css';

const MapComponent = () => {
    const [selectedLand, setSelectedLand] = useState(null);
    const [selectedPoints, setSelectedPoints] = useState({});

    const togglePointSelection = (landId, pointId) => {
        setSelectedPoints(prevPoints => ({
            ...prevPoints,
            [landId]: {
                ...prevPoints[landId],
                [pointId]: !prevPoints[landId]?.[pointId]
            }
        }));
    };


    const handleRowClick = (landId) => {
        setSelectedLand(landId);
        setSelectedPoints({});
    };

    // Define watering points data for each land
    const landData = [
        { landId: 'A', wateringPoints: Array.from({ length: 16 }, (_, i) => `A${i + 1}`), columns: 4 },
        { landId: 'B', wateringPoints: Array.from({ length: 16 }, (_, i) => `B${i + 1}`), columns: 4 },
        { landId: 'F', wateringPoints: Array.from({ length: 8 }, (_, i) => `F${i + 1}`), columns: 2 },
    ];


    return (
        <div className="map-container">
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Land ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {landData.map(land => (
                        <tr key={land.landId} onClick={() => handleRowClick(land.landId)}>
                            <td>{land.landId}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {landData.map(land => (
                <tr key={land.landId} onClick={() => handleRowClick(land.landId)}>
                    <td>{land.landId}</td>
                </tr>
            ))}


            {selectedLand && (
                <LandComponent
                    landId={selectedLand}
                    wateringPoints={landData.find(land => land.landId === selectedLand)?.wateringPoints || []}
                    columns={landData.find(land => land.landId === selectedLand)?.columns || 1}
                    selectedPoints={selectedPoints}
                    togglePointSelection={togglePointSelection}
                />
            )}

            {/*{landData.map(land => (*/}
            {/*    <LandComponent*/}
            {/*        key={land.landId}*/}
            {/*        landId={land.landId}*/}
            {/*        wateringPoints={land.wateringPoints}*/}
            {/*        columns={land.columns}*/}
            {/*        selectedPoints={selectedPoints}*/}
            {/*        togglePointSelection={togglePointSelection}*/}
            {/*    />*/}
            {/*))}*/}
        </div>
    );
};

export default MapComponent;
