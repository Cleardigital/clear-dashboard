import { db } from '../config/constants';

//Users
export function getUsers() {
  const dataRef = db.collection('users');

  return dataRef.get();
}

export function getUserInfo(accountId) {
  const dataRef = db.collection('users').doc(accountId);

  return dataRef.get();
}

export function pushData(accountId, data) {
  const dataRef = db
    .collection('accounts')
    .doc(accountId)
    .collection('data');

  return dataRef.add({
    SalesPeriod: data[0],
    StoreName: data[1],
    CountryOfSale: data[2],
    Artist: data[3],
    ReleaseType: data[4],
    ReleaseTitle: data[5],
    SongTitle: data[6],
    SalesType: data[7],
    UnitsSold: data[8],
    ExchangeRate: data[9],
    TotalEarned: data[10],
    Currency: data[11]
  });
}

export function createAccount(account) {
  const newAccountRef = db.collection('accounts').doc();
  return newAccountRef
    .set({
      name: account.name,
      image: account.image,
      uid: newAccountRef.id
    })
    .then(res => {
      console.log('account created success');
    });
}

export function getAccounts() {
  const dataRef = db.collection('accounts');

  return dataRef.get();
}

export function getAccountInfo(accountId) {
  const dataRef = db.collection('accounts').doc(accountId);

  return dataRef.get();
}

export function getSpotifyData(accountId) {
  const dataRef = db
    .collection('accounts')
    .doc(accountId)
    .collection('data');

  return dataRef.where('StoreName', '==', 'Spotify').get();
}

export function getAllData(accountId) {
  const dataRef = db
    .collection('accounts')
    .doc(accountId)
    .collection('data');

  return dataRef.get();
}

export function pushLinks(userId, data) {
  const dataRef = db.collection('users').doc(userId);
  return dataRef.update({
    linked: data
  });
}
