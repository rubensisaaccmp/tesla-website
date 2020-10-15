import React from 'react';
import { ModelsWrapper, ModelSection} from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay'
import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model S',
            'Model 3',
            'Model X',
            'Model Y',
            'Only $1.49/Watt for Solar on Existing Roofs',
            'Solar for New Roofs',
            'Accessories for Cars and Trucks',
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
               <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
               />
            }
          />
          ))}
        </div>

            <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
