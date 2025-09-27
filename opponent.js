import { useEffect, useState } from 'react';
import { getState } from '../lib/sleeper';

export default function Opponent() {
  const [status, setStatus] = useState('loading');
  useEffect(()=>{
    async function load(){
      try{
        const state = await getState();
        setStatus('loaded: week ' + state.week);
      }catch(e){ setStatus('error: ' + e.message); }
    }
    load();
  },[]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Opponent Preview</h1>
      <div className="card p-4">{status}</div>
    </div>
  )
}