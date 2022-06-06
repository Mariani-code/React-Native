import "./chart.css"
import { XAxis, ResponsiveContainer, Tooltip, CartesianGrid, YAxis, ScatterChart, Scatter, ReferenceLine, Legend, ZAxis,} from 'recharts';


export default function Chart() {

  const data01 = [
    { x: 4.1, y: 2, z: 'NMC' },
    { x: 1.4, y: 1.5, z: 'LFP' },
    { x: 1.5, y: 1, z: 'High Nickel NMC' },
    { x: 2, y: 1, z: 'SI/C Blended Anode' },
    { x: 1.4, y: 0.7, z: 'LMO' },
    { x: 2, y: 2, z: 'TESTING' },
    { x: 1.2, y: 0.8, z: 'LTO' },
    { x: 1.2, y: 1.8, z: 'Sodium Ion' },
    { x: 2, y: 2, z: 'Closed-Loop Recycling' },
    { x: 1.8, y: 1.7, z: 'Advanced LiB Analytics' },
    { x: 2.2, y: 2.8, z: 'Garnet Solid-State' },
    { x: 1.8, y: 1.3, z: 'Iron Air' },
    
  ];

  const data02 = [
    { x: 1.7, y: 2, z: 'Small Scale Nuclear' },
    { x: 2, y: 0.2, z: 'Manufacturering in Space' },
    { x: 0.9, y: 1.2, z: 'Direct CO2 Capture' },
    { x: 1, y: 2.5, z: 'V2G' },
    { x: 0.5, y: 1.9, z: 'New Lithium Extraction' },
    { x: 2, y: 1.2, z: 'Computer Vision - EHS' },
    { x: 1.9, y: 2.7, z: 'Drone Based FSS' },
    { x: 1, y: 2, z: 'Modular High Voltage Packs' },
    { x: 1.2, y: 2.8, z: 'Decentralized Cloud Storage' },
    { x: 1, y: 0.5, z: 'Flex Fuel Cells' },
    { x: 0, y: 1.5, z: 'SS Circuit Breakers' },
    { x: 0.2, y: 2.1, z: 'Aerogel Insulation' },
    
  ];

  
    return (
      <div className="chart">

        <h3 className="chartTitle">Technology Scoring</h3>
        <ResponsiveContainer width="100%" aspect={2.5}>
          <ScatterChart
            width={500}
            height={400}
            margin={{
              top: 50,
              right: 100,
              bottom: 100,
              left: 0,
            }}
          >
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"  />
            <XAxis type="number" dataKey="x" name="Non-Utilization" />
            <YAxis type="number" dataKey="y" name="Robustness"  />
            <ZAxis type="name" dataKey="z" name="Name"  />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend/>
            <Scatter name="General Tech Radar" data={data02} fill="#5550bd"/>
            <Scatter name="Battery Tech Radar" data={data01} fill="#82ca9d"/> 
            <ReferenceLine y="4" stroke="grey" label={{ value: 'Opportunity', angle: 360, position: 'insideBottomRight' }}/>
            <ReferenceLine y="4" stroke="grey" label={{ value: 'R&D', angle: 360, position: 'insideTopRight' }}/>
            <ReferenceLine y="4" stroke="grey" label={{ value: 'Aging', angle: 360, position: 'insideTopLeft' }}/>
            <ReferenceLine y="4" stroke="grey" label={{ value: 'Deployed', angle: 360, position: 'insideBottomLeft' }}/>
            <ReferenceLine x="4" stroke="grey"/> 
          </ScatterChart>
        </ResponsiveContainer>
        </div>
      );
}
