import React, { useEffect } from 'react';
import db from './farebase';
import { getDocs, collection, query } from "firebase/firestore";

function App() {

  // const [posts, setPosts] = useState<any | null>(null);
  const q = query(collection(db, "posts"));

  const getDataFromDB = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    
  }
  


  useEffect(()=>{
    getDataFromDB();
  },[]);

  return (
    <div className="App"></div>
  );
}

export default App;
