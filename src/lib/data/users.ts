
'use server';

// src/lib/data/users.ts
import { promises as fs } from 'fs';
import path from 'path';

// This is a mock implementation. In a real application, you would fetch this data from a database.
const usersFilePath = path.join(process.cwd(), 'src', 'lib', 'data', 'users.json');

async function getUsersData() {
  try {
    const fileContents = await fs.readFile(usersFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function getRegisteredUsers() {
  const users = await getUsersData();
  return users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    signupDate: user.signupDate,
  }));
}
