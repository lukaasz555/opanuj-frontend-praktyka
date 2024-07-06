// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';
import { render } from '@testing-library/react';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);

    const expectedValueOfBasicUsers = users.filter(
      (user) => user.role === 'user'
    ).length;
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(
      expectedValueOfBasicUsers
    );

    const renderedUsers = container.querySelectorAll('li');
    const renderedUsersWithAdminRole = Array.from(renderedUsers)
      .map((u) => u.textContent)
      .filter((r) => r !== null && r.includes('(Admin)'));
    expect(renderedUsersWithAdminRole).toHaveLength(0);
  });
});
