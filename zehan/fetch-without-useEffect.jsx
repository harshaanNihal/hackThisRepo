import React, { Suspense, use } from 'react';

function fetchUser() {
  return fetch('https://api.example.com/me').then(r => r.json());
}

function UserCard() {
  const user = use(fetchUser());
  return <div>Hello, {user.name}!</div>;
}

export default function Page() {
  return (
    <Suspense fallback="Loading user…">
      <UserCard />
    </Suspense>
  );
}
