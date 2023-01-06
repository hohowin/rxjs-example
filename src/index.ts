import { map, Observable } from 'rxjs';

const users = {
    data: [
      {
        id: 1,
        status: "active",
        age: 14,
      },
      {
        id: 1,
        status: "inactive",
        age: 12,
      },
      {
        id: 1,
        status: "active",
        age: 42,
      },
      {
        id: 1,
        status: "inactive",
        age: 42,
      },
      {
        id: 1,
        status: "active",
        age: 13,
      },
      {
        id: 1,
        status: "inactive",
        age: 75,
      },
      {
        id: 1,
        status: "inactive",
        age: 43,
      },
      {
        id: 1,
        status: "inactive",
        age: 54,
      },
      {
        id: 1,
        status: "active",
        age: 7,
      },
      {
        id: 1,
        status: "active",
        age: 17,
      },
    ],
  };
  
  const observable = new Observable((subscriber) => {
    subscriber.next(users);
  }).pipe(
    map((value: any) => {
      return value.data;
    }),
    map((users) => {
      return users.reduce((sum: number, user: any) => sum + user.age, 0) / users.length;
    }),
    map((average) => {
      if (average < 18) throw new Error(`Average age is too small (${average})`);
      else return average;
    }),
    map((average) => `The average age is ${average}`)
  );
  
  const observer = {
    next: (x: any) => console.log("Observer got a next value: " + x),
    error: (err: any) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };
  const observer2 = {
    next: (x: any) => console.log("Observer 2 got a next value: " + x),
    error: (err: any) => console.error("Observer 2 got an error: " + err),
    complete: () => console.log("Observer 2 got a complete notification"),
  };
  
  observable.subscribe(observer);
  
  observable.subscribe(observer2);