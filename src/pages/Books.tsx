import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router';
import bookDetails from '../script/listOfBooks.json'
import { ReactReader } from 'react-reader';
import { any } from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';


const Books: React.FC = () => { 
    const location1 = useLocation();
    console.log(queryString.parse(location1.search));

  const urlDummy = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
  // const urlDummy = "../../public/assets/EPUBS/Alice.epub";
  const tittleDummy = "Alice in wonderland";
  const storage = global.localStorage || null;
  const fileLocaltion = storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2;
   console.log('fileLocaltion', fileLocaltion);
  const [fullscreen, setFullScreen ] = useState(false);
  const [ location, setLocation ] = useState(fileLocaltion);
  const [ localFile, setlocalFile ] = useState(null);
  const [ localName, setlocalName ] = useState(null);

          const onLocationChanged = location => {
            console.log('location', location);
            storage && storage.setItem("epub-location", location);
           setLocation(location);
          };
    

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
                        url={localFile || urlDummy}
                        title={localName || tittleDummy}
                        location={location}
                        locationChanged={onLocationChanged}
                      />

       
      </IonContent>
    </IonPage>
  );
};

export default Books;