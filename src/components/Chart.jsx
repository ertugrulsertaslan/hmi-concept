import { AreaChart, XAxis,YAxis,CartesianGrid,Area,Tooltip, ResponsiveContainer } from "recharts";
function Chart() {

  //Plot data
    const data = [
        {
          "pv": 15
        },
        {
          "pv": 25
        },
        {
          "pv": 23
        },
        {
          "pv": 30
        },
        {
          "pv": 31
        },
        {
          "pv": 28
        },
        {
          "pv": 25
        }
        ,
        {
          "pv": 22
        }
        ,
        {
          "pv": 18
        }
      ]
    return (
    <ResponsiveContainer width="100%" height={50}>
        <AreaChart  data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid verticalPoints={[0, 55,110,165,220,275]} horizontalPoints={[0,25,50]} stroke="#525259" strokeDasharray="3 3" /> 
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    </ResponsiveContainer>
    )


}
export default Chart;