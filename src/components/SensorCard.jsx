function SensorCard({ label, value, unit, isAlert }) {
    return (
        <div
            className={`rounded-xl p-5 shadow-lg border ${isAlert
                    ? 'bg-red-950 border-red-500 animate-pulse'
                    : 'bg-slate-800 border-slate-700'
                }`}
        >
            <p className="text-slate-400 text-sm uppercase tracking-wide">{label}</p>
            <p className={`text-3xl font-bold mt-2 ${isAlert ? 'text-red-400' : 'text-cyan-400'}`}>
                {value} <span className="text-lg font-normal">{unit}</span>
            </p>
        </div>
    )
}

export default SensorCard