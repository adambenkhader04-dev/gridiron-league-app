import { useEffect, useState } from 'react';
import { getState } from '../lib/sleeper';

export default function Dashboard() {
  const [week, setWeek] = useState(null);
  const [status, setStatus] = useState('Loading...');

  useEffect(()=>{
    async function load(){
      try{
        const s = await getState();
        setWeek(s.week);
        setStatus('Loaded');
      }catch(e){
        setStatus('Error: ' + e.message);
      }
    }
    load();
  },[]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">League Dashboard</h1>
      <div className="card p-6">
        <div className="text-lg">Current NFL Week: <strong>{week}</strong></div>
        <div className="mt-3">Status: {status}</div>
        <p className="mt-4 text-sm text-gray-300">This MVP pulls live data from the Sleeper API for league id <code>{process.env.NEXT_PUBLIC_LEAGUE_ID}</code>.</p>
      </div>
    </div>
  )
}