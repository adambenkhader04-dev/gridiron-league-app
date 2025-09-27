import { useEffect, useState } from 'react';
import { getProjections, getState } from '../lib/sleeper';

export default function Available() {
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    async function load(){
      try{
        const season = new Date().getFullYear();
        const state = await getState();
        const week = state.week;
        const proj = await getProjections(season, week);
        setRows(proj.slice(0,30));
      }catch(e){ console.error(e); }
    }
    load();
  },[]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Players (Top 30)</h1>
      <div className="card p-4">
        <ul className="space-y-2">
          {rows.map(r => <li key={r.player_id} className="p-2 bg-[#08131f] rounded">{r.player_name} — {r.pts_ppr}</li>)}
        </ul>
      </div>
    </div>
  )
}