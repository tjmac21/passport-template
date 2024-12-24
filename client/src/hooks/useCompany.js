import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export function useCompany() {
  const { user } = useAuth();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchSessions = async () => {
      const response = await fetch(`/api/companies/${user.companyId}/sessions`);
      setSessions(response.data);
    };

    fetchSessions();
  }, [user]);

  const fetchSession = async (sessionId) => {
    const response = await fetch(`/api/companies/${user.companyId}/sessions/${sessionId}`);
    return response.data;
  };

  const createSession = async (session) => {
    const response = await fetch(`/api/companies/${user.companyId}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(session),
    });
    const newSession = await response.json();
    setSessions([...sessions, newSession]);
  };

  const updateSession = async (sessionId, updates) => {
    const response = await fetch(`/api/companies/${user.companyId}/sessions/${sessionId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.data;
  };

  const deleteSession = async (sessionId) => {
    await fetch(`/api/companies/${user.companyId}/sessions/${sessionId}`, {
      method: 'DELETE',
    });
    setSessions(sessions.filter(session => session.id !== sessionId));
  };

  return {
    sessions,
    fetchSession,
    createSession,
    updateSession,
    deleteSession,
  };
} 