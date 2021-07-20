import React from 'react';
import HornedBeasts from './HornedBeasts';
import Bird from '../img/kingfisher-2046453_1920.jpg';

function Main() {
  return (
    <>
      <HornedBeasts
        title="Bird"
        imgurl={Bird}
        desc="special bird"/>
    </>
  );
}
export default Main;
