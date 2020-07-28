import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';

import React from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router';
import bookDetails from '../script/listOfBooks.json'
// import { ReactReader } from "react-reader";
// import { any } from 'prop-types';

const Dashboard: React.FC = () => {

   
    const username = useSelector((state : any) => state.user.username)
    const history = useHistory()
    async function logout () {
       await logoutUser()
        history.replace('/')
    }

    // const function displayEpub  {
    //     return (
    //         // <div style={{ position: "relative", height: "100%" }}>
    //         //   {" "}
    //           // * Container needs a height..
    //           <ReactReader
    //             url={"/alice.epub"}
    //             title={"Alice in wonderland"}
    //             location={"epubcfi(/6/2[cover]!/6)"}
    //             locationChanged={epubcifi => console.log(epubcifi)}
    //           />
    //         // </div>
    //       );
    // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DashBoard</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <p>Hello {username}</p>
        <IonButton>Select File</IonButton>
        <IonList>
          {bookDetails.map(book => (
            <IonItemSliding key={book.title}>
              <IonItem>
            <IonAvatar >
              <img 
              src={book.imageUrl}
              />
            </IonAvatar>

            <IonLabel className="ion-padding">
              <h2>{book.title}</h2>              
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
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
