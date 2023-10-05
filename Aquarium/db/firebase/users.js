import { db } from "../Config";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    setDoc,
    doc,
    query,
    where,
    onSnapshot,
    deleteDoc,
    updateDoc,
  } from "firebase/firestore";
  import { app } from "../Config";
const firestoreDB = getFirestore(app);
async function getusersInfo() {
  const userCol = collection(db, "users");
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return userList;
}

async function deleteusers(id) {
  try {
    await deleteDoc(doc(db, "users", id));
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function Addusers(user) {
  try {
    console.log(user);
    await setDoc(doc(firestoreDB, "Users"), user);
    // const docRef = await addDoc(collection(db, "users"), user);
    // return docRef; // Return the reference to the added document
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Rethrow the error to handle it at a higher level if needed
  }
}

async function edituser(user) {
  await setDoc(doc(db, "users", user.id), user);
}

function subscribe(callback) {
  const unsubscribe = onSnapshot(query(collection(db, "users")), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (callback) callback({ change, snapshot });
    });
  });
  return unsubscribe;
}

async function getUserById(uid) {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

export {
  getusersInfo,
  Addusers,
  edituser,
  deleteusers,
  subscribe,
  getUserById,
};
