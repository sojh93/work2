import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { Main } from './Main';
import Detail from "./Detail";
import {db} from "./firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";


function App() {
  
  React.useEffect(async() => {
    console.log(db);
    
    const docRef = doc(db, "work2", "J2Fr1JnCAjSmSQdufMdv");
    updateDoc(docRef, {completed: true})

  }, []);
  
  return (
    
    <div className="App">
      
         <BrowserRouter>
          <Route path="/" component={Main} exact/>
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      
    </div>

    
  );
}



export default App;
