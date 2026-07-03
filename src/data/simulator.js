// Generates fake live sensor data to simulate the Arduino rider-safety system

let lat = 12.9716   // starting point (Bengaluru)
let lng = 77.5946

export function generateReading(previous) {
  // small random walk for GPS so the marker moves naturally
  lat += (Math.random() - 0.5) * 0.001
  lng += (Math.random() - 0.5) * 0.001

  const alcoholLevel = Math.floor(Math.random() * 40) // usually low
  const speed = Math.floor(20 + Math.random() * 40)   // 20-60 km/h

  // rare random crash event (about 3% chance per tick)
  const crashDetected = Math.random() < 0.03

  // alert if alcohol crosses safe threshold
  const alcoholAlert = alcoholLevel > 30

  return {
    timestamp: Date.now(),
    lat,
    lng,
    alcoholLevel,
    speed,
    crashDetected,
    alcoholAlert,
  }
}