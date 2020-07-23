import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'
import { async } from 'q';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

async function register  () {
    // console.log(username, password, confirmPassword)
    if(password !== confirmPassword){
        return toast('Password do not match', 4000)
    }
    if(username.trim() === '' || password.trim() === ''){
        return toast('Username and Password are required', 4000)
    } 
    const res = await registerUser(username, password) 
    if(res){
        toast('You have registered succcessfully', 3000)
    }

}

     


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
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
        <IonInput  
        type="password"
        placeholder="Confirm Password" 
        onIonChange={(e:any) => setConfirmPassword(e.target.value)}
        />
        <IonButton onClick={register}>Register</IonButton>
        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
