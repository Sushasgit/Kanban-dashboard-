import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB_M_KwKUxunejaC_sayCDH6TO6XouVwbI',
  authDomain: 'kanban-dashboard.firebaseapp.com',
  databaseURL: 'https://kanban-dashboard.firebaseio.com/',
  projectId: 'kanban-dashboard',
  storageBucket: 'kanban-dashboard.appspot.com',
  messagingSenderId: '1074453387595',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database();
const auth = firebase.auth();

export {
  database,
  auth,
};
