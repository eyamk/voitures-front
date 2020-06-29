import React, { useState } from 'react';
import { Tabs } from "@bumaga/tabs";
import Tab from './Tab';
import Panel from './Panel';
import TabWrapper from './TabWrapper';
import Modal from '../../../shared/layout/header/Modal';
import CarsList from '../../../screens/cars/cars';

const Tabulation = () => {
  const [ show, setShow ] = useState(false);
  return (
    <TabWrapper>
      <Tabs>
        <div className='navBar'>
          <Tab>Acceuil</Tab>
          <Tab>Gestion du Parc</Tab>
          <Tab>Gestion des véhicule</Tab>
          <Tab>Mon Agence</Tab>
        </div>
     
        <div>
          <img src="static/social-media.png" onClick={() => setShow(!show)} />
          <div>
            <Panel>Acceuil</Panel>
            <Panel>Gestion du Parc</Panel>
            <Panel> <CarsList /> </Panel>
            <Panel>Mon Agence</Panel>
          </div>
          <Modal show={show} setShow={setShow}>
            <div className="border-modal">
              <p>Mes informations</p>
              <p>Changer mon mot de passe</p>
              <p>Mes connexions</p>
              <div className="deconnect">
                <p >
  							Se déconnecter <img className="deconnect-photo" src="static/signs.png" />
                </p>
              </div>
              <div />
            </div>
          </Modal>

        </div>
       
       

      </Tabs> 
      
    </TabWrapper>
  )};
export default Tabulation;