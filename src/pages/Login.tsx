import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';

const Login: React.FC = () => {
const [busy, setBusy] = useState<boolean>(false)
      const dispatch = useDispatch()
      const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

async function login () {
    setBusy(true)
    // console.log(username, password)
    const res: any  = await loginUser(username, password)

    if(res) {
        dispatch(setUserState(res.user.email))
        history.replace('/dashboard')
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
