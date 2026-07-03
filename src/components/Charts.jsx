import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function Charts({ history }) {
    const data = history.map((r, i) => ({
        time: i,
        alcohol: r.alcoholLevel,
        speed: r.speed,
    }))

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mt-6">
            <h2 className="text-xl font-semibold text-slate-300 mb-4">Trip Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                    <Line type="monotone" dataKey="alcohol" stroke="#f87171" strokeWidth={2} dot={false} name="Alcohol %" />
                    <Line type="monotone" dataKey="speed" stroke="#22d3ee" strokeWidth={2} dot={false} name="Speed km/h" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts