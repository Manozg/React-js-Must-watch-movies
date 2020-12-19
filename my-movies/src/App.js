import React from 'react';
import Card from './Cards'
import CardData from './CardData';

const App = () =>(
    <>
      <h1 className="heading_style"> Must Watch Movies</h1>
        {CardData.map((val, index) => {
           return( 
            <Card 
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
        />
      );
      })}
    </>
);
export default App;

