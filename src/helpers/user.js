import { db } from '../config/constants';

export function getUserInfo(accountId) {
  const dataRef = db.collection('users').doc(accountId);

  return dataRef.get();
}

export function getLinkedAccountsInfo(linkedID) {
  const dataRef = db.collection('accounts').doc(linkedID);

  return dataRef.get();
}

//Get Data

export function getAccountData(accountId, storeName) {
  return db
    .collection('accounts')
    .doc(accountId)
    .collection('data')
    .where('StoreName', '==', storeName)
    .get();
}
