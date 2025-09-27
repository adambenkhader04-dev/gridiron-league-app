import { useEffect, useState } from 'react';
import { getPlayers, getProjections, getLeagueRosters, getState } from '../lib/sleeper';

export default function Roster() {
  const [data, setData] = useState({loading:true, err:null, projections:[]});

  useEffect(()=>{
    async function load(){
      try{
        const leagueId = process.env.NEXT_PUBLIC_LEAGUE_ID;
        const season = new Date().getFullYear();
        const state = await getState();
        const week = state.week;
        const projArr = await getProjections(season, week);
        setData({loading:false, projections: projArr.slice(0,50), err:null});
      }catch(e){ setData({loading:false, err:e.message}); }
    }
    load();
  },[]);

  if (data.loading) return <div>Loading...</div>;
  if (data.err) return <div>Error: {data.err}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roster (MVP scaffold)</h1>
      <div className="card p-4">
        <div className="text-sm text-gray-300">This page shows a skeleton roster view. In the full app this will be the Sleeper-style roster with starters grouped by position.</div>
        <div className="mt-4">
          <h3 className="font-semibold">Top projections snapshot</h3>
          <ul className="mt-2 space-y-2">
            {data.projections.map(p => <li key={p.player_id} className="p-2 bg-[#08131f] rounded">{p.player_name} — {p.pts_ppr}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}