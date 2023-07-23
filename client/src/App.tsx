import React, { useCallback, useEffect, useState } from "react";
import db from "./farebase";
import { getDocs, collection, query } from "firebase/firestore";
import UserComponent from "./components/user";

function App() {
  // const [posts, setPosts] = useState<any | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const person:[string, age] = ["amir", 35]

  const q = query(collection(db, "posts"));

  const getDataFromDB = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  useEffect(() => {
    getDataFromDB();
  }, []);

  useEffect(()=>{
    console.log("Parent component has updated.");
  })

  const login = useCallback(()=>{
    setIsLoggedIn(!isLoggedIn);
}, [isLoggedIn])

  return <div>
    <p>Counter is: {counter}</p>
    <button onClick={() => setCounter(c => c + 1)}>Add counter</button>
    <UserComponent login={login} isLoggedIn={isLoggedIn} />
  </div>;
}

export default App;
