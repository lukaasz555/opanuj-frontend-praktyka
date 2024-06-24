import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isRetryAllowed, setRetryAllowed] = useState(false);

  const fetchData = fetch(API_URL);
  const timeout = new Promise((_, reject) => {
    return setTimeout(() => {
      reject(new Error('Request timeout'));
    }, 5000);
  });

  async function fetchUsers() {
    Promise.allSettled([fetchData, timeout])
      .then((responses) => {
        let fetched = false;
        responses.forEach((response) => {
          if (
            response.status === 'fulfilled' &&
            response.value instanceof Response
          ) {
            setError(false);
            response.value
              .json()
              .then((data) => {
                setUsers(data.users);
                fetched = true;
              })
              .catch((err) => {
                console.error('Error parsing JSON:', err);
                setError(true);
              });
          }
        });
        if (!fetched) {
          setError(true);
          setRetryAllowed(true);
        }
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setError(true);
        setRetryAllowed(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {isError && (
          <div className="flex flex-row items-center">
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
            {isRetryAllowed && (
              <button
                className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
                onClick={fetchUsers}
              >
                Try again
              </button>
            )}
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
