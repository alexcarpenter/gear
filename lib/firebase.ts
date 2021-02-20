import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'gear-4a1d8',
    }),
    databaseURL: 'https://gear-4a1d8-default-rtdb.firebaseio.com',
  });
}

export default admin.database();
