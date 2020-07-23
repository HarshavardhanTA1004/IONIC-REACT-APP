import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const books = [
  {
    name : "Book1",
    desc : "Description for Book1"
  },
  {
    name : "Book2",
    desc : "Description for Book2"
  },
  {
    name : "Book3",
    desc : "Description for Book3"
  },
  {
    name : "Book4",
    desc : "Description for Book4"
  }
]

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

        <IonList>
          {books.map(book => (
            <IonItemSliding key={book.name}>
              <IonItem>
            <IonAvatar >
              <img 
              src={`https://ionicframework.com/docs/demos/
              api/list/avatar-${book.name.toLowerCase()}
              .png`}
              />
            </IonAvatar>

            <IonLabel className="ion-padding">
              <h2>{book.name}</h2>
              <h4>{book.desc}</h4>
            </IonLabel>
            </IonItem>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => 
                alert('Pressed Read Button')}>
                  Read
                  </IonItemOption>
          </IonItemOptions>

          </IonItemSliding>
          ))}
        </IonList>
        <IonButton routerLink="/login">LOGIN</IonButton>
        <IonButton routerLink="/register">REGISTER</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
