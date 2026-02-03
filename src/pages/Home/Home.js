import React from 'react';
import './Home.css';
import CountdownComponent from "../../components/UI/CountDownComponent";
import imgBck from '../../files/images/cover.jpg';
import data from "./HomeData.json"

const HomeComponent = () => {

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.date}</p>
      </header>
      <div className="bckHOME">
        <img src={imgBck} alt="Copertina" className="immagineHome" />
      </div>
      {<CountdownComponent />}
      {/*<div className="widget-container">
        <div className="widget">
          <h2>{data.manifestTitle}</h2>
          {data.manifestText.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
      */}
      <div className="widget-container">
        <div className="widget">
          <h2>{data.widgetTitle}</h2>
          <p>{data.widgetText}</p>
        </div>

        {
          //Ghigo dovevi aggiungere anche il widget container
        }

      </div>
      {//ci sto mettendo le cazzo di mani
      }
      <div className="widget-container">
        <div className="widget">
          <h2>{data.doveQuandoTitle}</h2>
          <p>{data.doveQunadoText}</p>
        </div>
      </div>
      <div className="widget-container">
        <div className="widget">
          <h2>{data.chiSiamoTitle}</h2>
          <p>{data.chiSiamoText}</p>
        </div>
      </div>
      <div className="widget-container">
        <div className="widget">
          <h2>{data.cosaCiMuoveTitle}</h2>
          <p>{data.cosaCiMuoveText}</p>
        </div>
      </div>
      <div className="widget-container">
        <div className="widget">
          <h2>{data.percheAiutarciTitle}</h2>
          <p>{data.percheAiutarciText}</p>
        </div>
      </div>
      <div className="widget-container">
        <div className="widget">
          <h2>{data.comeSostenerciTitle}</h2>
          <p>{data.comeSostenerciText}</p>
        </div>
      </div>
      
      


      
    </div>
  );
};

export default HomeComponent;
