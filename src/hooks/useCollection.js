import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (collections, _query) => {
  const [documents, setDocuments] = useState([]);

  const querys = useRef(_query).current;

  useEffect(() => {
    let ref = collection(db, collections);

    if (querys) {
      ref = query(ref, where(...querys));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setDocuments(results);
    });
    return () => unsub();
  }, [collections, querys]);
  return { documents };
};
