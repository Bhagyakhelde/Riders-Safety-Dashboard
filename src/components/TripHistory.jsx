function TripHistory({ history }) {
    const recent = [...history].reverse() // newest first

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mt-6">
            <h2 className="text-xl font-semibold text-slate-300 mb-4">Trip History</h2>

            {recent.length === 0 ? (
                <p className="text-slate-500">No readings yet...</p>
            ) : (
                <div className="overflow-y-auto max-h-64">
                    <table className="w-full text-sm text-left">
                        <thead className="text-slate-400 border-b border-slate-700 sticky top-0 bg-slate-800">
                            <tr>
                                <th className="py-2 pr-4">Time</th>
                                <th className="py-2 pr-4">Alcohol %</th>
                                <th className="py-2 pr-4">Speed</th>
                                <th className="py-2 pr-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recent.map((r, i) => (
                                <tr key={i} className="border-b border-slate-700/50">
                                    <td className="py-2 pr-4 text-slate-300">
                                        {new Date(r.timestamp).toLocaleTimeString()}
                                    </td>
                                    <td className={`py-2 pr-4 ${r.alcoholAlert ? 'text-red-400 font-semibold' : 'text-slate-300'}`}>
                                        {r.alcoholLevel}%
                                    </td>
                                    <td className="py-2 pr-4 text-slate-300">{r.speed} km/h</td>
                                    <td className="py-2 pr-4">
                                        {r.crashDetected ? (
                                            <span className="text-red-400 font-semibold">🚨 Crash</span>
                                        ) : r.alcoholAlert ? (
                                            <span className="text-yellow-400 font-semibold">⚠ Alert</span>
                                        ) : (
                                            <span className="text-green-400">Safe</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default TripHistory