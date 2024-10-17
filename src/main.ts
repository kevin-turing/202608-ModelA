import { collection, addDoc } from 'firebase/firestore';

async function addDocument(db: Firestore, data: any) {
  try {
    const docRef = await addDoc(collection(db, 'your_collection_name'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
