import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planeta, index) => (
          <PlanetCard
            key={ index }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
