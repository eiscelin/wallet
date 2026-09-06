import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "eis_portfolio_users";
const SESSION_KEY = "eis_portfolio_session";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (session) setUser(session);
    } catch {}
    setLoading(false);
  }, []);

  const signup = useCallback((username, password) => {
    const users = getUsers();
    if (users.find((u) => u.username === username)) {
      return { error: "Username already exists" };
    }
    const newUser = { username, password };
    users.push(newUser);
    saveUsers(users);
    const session = { username };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, []);

  const login = useCallback((username, password) => {
    const users = getUsers();
    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) {
      return { error: "Invalid username or password" };
    }
    const session = { username };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return { user, loading, signup, login, logout };
}
