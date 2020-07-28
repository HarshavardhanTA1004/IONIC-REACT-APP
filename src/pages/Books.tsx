import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';

import React from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router';
import bookDetails from '../script/listOfBooks.json'
import { ReactReader } from 'react-reader';
import { any } from 'prop-types';
import { Link } from 'react-router-dom';

const Books: React.FC = () => { 
   

    
    

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">        
        {/* <IonButton>Select File</IonButton> */}
        <ReactReader
                        url={'../../public/assets/EPUBS/Alice.epub'}
                        title={"Alice in wonderland"}
                        location={"epubcfi(/6/2[cover]!/6)"}
                        locationChanged={epubcifi => console.log(epubcifi)}
                      />

       
      </IonContent>
    </IonPage>
  );
};

export default Books;
