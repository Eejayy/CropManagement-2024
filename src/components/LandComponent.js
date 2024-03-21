// LandComponent.js
import React from 'react';
import WateringPoint from './WateringPoint';
import './irrigation.css';

const LandComponent = ({ landId, wateringPoints, columns, selectedPoints, togglePointSelection }) => {
    return (
        <div className="land-container">
            <h2>Land {landId}</h2>
            <div className="watering-points-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {wateringPoints.map(pointId => (
                    <WateringPoint
                        key={pointId}
                        landId={landId}
                        pointId={pointId}
                        isSelected={selectedPoints?.[landId]?.[pointId]}
                        togglePointSelection={togglePointSelection}
                    />
                ))}
            </div>
        </div>
    );
};

export default LandComponent;
