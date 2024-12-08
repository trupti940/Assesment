import { getDatabase, ref, remove, get } from 'firebase/database';  
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDzhKbe2f8uws3Lf1BzpsrpyW9VEGQofWE",
  authDomain: "dashboard-78b18.firebaseapp.com",
  databaseURL: 'https://dashboard-78b18-default-rtdb.firebaseio.com/',
  projectId: "dashboard-78b18",
  storageBucket: "dashboard-78b18.firebasestorage.app",
  messagingSenderId: "366840037667",
  appId: "1:366840037667:web:b82710ef2f91c266338c96"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const fetchUsers = async () => {
  try {
    const dbRef = ref(db, 'users');
    const snapshot = await get(dbRef);  
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('No data available');
    }
  } catch (error) {
    throw new Error('Error fetching data: ' + error.message);
  }
};

export const deleteUser = async (userId) => {
  try {
    const userRef = ref(db, 'users/' + userId);
    await remove(userRef); 
    console.log(`User with ID ${userId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Could not delete user");
  }
};
