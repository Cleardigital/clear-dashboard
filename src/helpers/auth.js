import { db, firebaseAuth } from '../config/constants';

export function auth(email, pw, data) {
  return (
    firebaseAuth()
      .createUserWithEmailAndPassword(email, pw)
      // .then(saveUser(user, role));
      .then(user => {
        // console.log('User created successfully with payload-', authData);
        saveUser(user, data.name, data.role);
        updateUser(user, data);
        //Write code to use authData to add to Users
      })
      .catch(_error => {
        console.log('Login Failed!', _error);
      })
  );
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user, name, role) {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      info: {
        name: name,
        email: user.email,
        role: role,
        uid: user.uid
      },
      linked: [],
      notifications: [
        {
          context: 'Welcome to Clear Digital',
          type: 'blue',
          date: new Date()
        }
      ]
    })
    .then(() => user);
}

export function updateUser(user, data) {
  return user
    .updateProfile({
      displayName: data.name,
      photoURL: 'https://avatars0.githubusercontent.com/u/19873436?s=460&v=4'
    })
    .then(() => {
      // Update successful.
      console.log('success!');
    })
    .catch(error => {
      // An error happened.
      console.log('err: ', error);
    });
}
