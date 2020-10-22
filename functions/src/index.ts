const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp()
const db = admin.database();

exports.updateUserView = functions.database
  .ref('views/{viewID}')
  .onCreate((snap: any, context: any) => {
    let newView = snap.data();
    let userActivity = db.list('activity', (ref:any) => ref.orderByChild('id').equalTo(newView.vieweeID));

    return db.runTransaction((transaction:any) => {
      return transaction.get(userActivity).then((response:any) => {
        const currentViews = response.views;
        return transaction.update(userActivity, {views: currentViews + 1});
      })
    })
  });

exports.updatePostView = functions.firestore
  .document('views/{viewID}')
  .onCreate((snap: any, context: any) => {
    let newView= snap.data();
    let postActivity = admin.firestore().doc('activity/' + newView.pid);

    return db.runTransaction((transaction:any) => {
      return transaction.get(postActivity).then((response:any) => {
        const currentViews = response.views;
        return transaction.update(postActivity, {views: currentViews + 1});
      })
    })
  });

exports.updateUserCollection = functions.firestore
  .document('views/{viewID}')
  .onCreate((snap: any, context: any) => {
    let newCollection = snap.data();
    let userActivity = admin.firestore().doc('activity/' + newCollection.collecteeID);

    return db.runTransaction((transaction:any) => {
      return transaction.get(userActivity).then((response:any) => {
        const currentCollection = response.collection;
        return transaction.update(userActivity, {collection: currentCollection + 1});
      })
    })
  });

exports.updatePostCollection = functions.firestore
  .document('views/{viewID}')
  .onCreate((snap: any, context: any) => {
    let newCollection = snap.data();
    let postActivity = admin.firestore().doc('activity/' + newCollection.pid);

    return db.runTransaction((transaction:any) => {
      return transaction.get(postActivity).then((response:any) => {
        const currentCollection = response.collection;
        return transaction.update(postActivity, {collection: currentCollection + 1});
      })
    })
  });
