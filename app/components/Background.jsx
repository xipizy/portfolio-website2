import Wave from 'react-wavify';

const Background = () => (
    <div className = "fixed bottom-0 left-0 w-full overflow-hidden z-[-1] h-110">
  <Wave fill="url(#gradient)"
       paused={false}
        style={{ display: 'flex', height: '500px'}}
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.25,
          points: 3
        }}>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#3D6396" />
      <stop offset="90%" stopColor="#203758" />
    </linearGradient>
  </defs>
</Wave>
</div>
)

export default Background;