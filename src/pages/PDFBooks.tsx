import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemOptions } from '@ionic/react';

const Books: React.FC = () => { 
    const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      
      document.viewDocument
      ('assets/myFile.pdf', 'application/pdf', options)

  const urlDummy = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
  // const urlDummy = "../../public/assets/EPUBS/Alice.epub";
  const tittleDummy = "Alice in wonderland";
  const storage = global.localStorage || null;
  const fileLocaltion = storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2;
   console.log('fileLocaltion', fileLocaltion);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PDFBook</IonTitle>
        </IonToolbar>
      </IonHeader>      
      <IonContent className="ion-padding">
      </IonContent>
    </IonPage>
  );
};

export default PDFBooks;