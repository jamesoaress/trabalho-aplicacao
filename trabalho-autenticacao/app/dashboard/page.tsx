// app/dashboard/page.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Área Interna</h1>
      <p>Você só está vendo esta página porque possui um token válido!</p>
      <button 
        onClick={handleLogout} 
        style={{ padding: '10px', marginTop: '20px', cursor: 'pointer', backgroundColor: '#e00', color: 'white', border: 'none' }}>
        Sair
      </button>
    </div>
  );
}