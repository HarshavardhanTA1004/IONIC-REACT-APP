import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LIBRARY APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 className="ion-padding">WELCOME TO LIBRARY APP</h1>
        <h4>This application is a JOY for book LOVERS!!!</h4>

       
        <IonButton routerLink="/login">LOGIN</IonButton>
        <IonButton routerLink="/register">REGISTER</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
