import React from 'react';
import HornedBeasts from './HornedBeasts';
import { animalData } from '../data';

function Main() {
  return (
    <>
      {animalData.map((data, key) => {
        return (
          <div key={key}>
            <HornedBeasts
              key={key}
              image_url={data.image_url}
              title={data.title}
              description={data.description}
            />
          </div>
        );
      })}
      {/* <HornedBeasts
        title="Bird"
        imgurl={Bird}
        desc="special bird"/> */}
    </>
  );
}
export default Main;
