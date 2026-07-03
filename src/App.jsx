import { useEffect, useState } from 'react'
import { generateReading } from './data/simulator'
import SensorCard from './components/SensorCard'
import LiveMap from './components/LiveMap'
import Charts from './components/Charts'
import TripHistory from './components/TripHistory'

function App() {
  const [reading, setReading] = useState(null)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newReading = generateReading()
      setReading(newReading)
      setHistory((prev) => [...prev.slice(-19), newReading])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  if (!reading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-slate-400">Connecting to sensors...</p>
      </div>
    )
  }

  const status = reading.crashDetected
    ? { label: '🚨 Crash Detected', color: 'bg-red-600' }
    : reading.alcoholAlert
      ? { label: '⚠ Alcohol Alert', color: 'bg-yellow-500 text-slate-900' }
      : { label: '✅ Rider Safe', color: 'bg-green-600' }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">Rider Safety Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Live telemetry from embedded rider-safety system</p>
        </div>
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${status.color}`}>
          {status.label}
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-8">
        {/* Sensor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <SensorCard label="Alcohol Level" value={reading.alcoholLevel} unit="%" isAlert={reading.alcoholAlert} />
          <SensorCard label="Speed" value={reading.speed} unit="km/h" />
          <SensorCard label="Latitude" value={reading.lat.toFixed(4)} unit="°" />
          <SensorCard label="Longitude" value={reading.lng.toFixed(4)} unit="°" />
        </div>

        {/* Map */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-3">Live Location</h2>
          <LiveMap lat={reading.lat} lng={reading.lng} crashDetected={reading.crashDetected} />
        </section>

        {/* Chart + History side by side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Charts history={history} />
          <TripHistory history={history} />
        </div>
      </main>

      <footer className="text-center text-slate-600 text-xs py-6 border-t border-slate-800 mt-8">
        Built by Bhagyashree S Khelde · React + Firebase + Leaflet · Simulated IoT telemetry
      </footer>
    </div>
  )
}

export default App