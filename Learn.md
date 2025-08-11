# Things i learned

### how to setup database (firebase) (Adding Data)

- imports

1. import getDatabase (To get your database)
2. import ref (to ref to reference a place in the database)
3. import push (to push data to a specific place in the database)
4. import set (to set data in the database)

- Setup

1. Create an async await function (because firebase returns promises)
2. get the database using getDatabase (const db = getDatabase(app))
3. create a reference to reference the database then push data to a specific location using the ref, (const TestRef = push(
   ref(db, `AllUserData/Data`)
   );), Note: the push takes one parameters which is the ref and the ref takes in two parameters which is the database and the location of the data in the database
4. use the set to set the data, it takes two parameter the ref variable created earlier and the data being set

### how to setup database (firebase) (fetching Data)

- import

1. import app, ref, get & getDatabase

- setup

1. Create an async await function (because firebase returns promises)
2. create a reference to reference the database then push data to a specific location using the ref, (const TestRef =
   ref(db, `AllUserData/Data`)
   );
3. use the try catch to resolve the data gotten using the get, (const snapshot = await get(investmentRef))
4. check if snapshot exist if it does then set your data to: Object.values(snapshot.val())
