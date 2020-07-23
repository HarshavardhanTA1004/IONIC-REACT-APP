import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';

const Login: React.FC = () => {
const [busy, setBusy] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

async function login () {
    setBusy(true)
    // console.log(username, password)
    const res  = await loginUser(username, password)

    if(res) {
        toast('You have Logged in!!!')

        
    }
    // console.log(`${res ? 'Login success' : 'Login Failure'}`)
    setBusy(false)
}


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput        
        placeholder="Enter Username" 
        onIonChange={(e:any) => setUsername(e.target.value)}
        />
        <IonInput 
        type="password"
        placeholder="Enter Password" 
        onIonChange={(e:any) => setPassword(e.target.value)}
        />
        <IonButton onClick={login}>Login</IonButton>
        <p>
            Create an account? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
