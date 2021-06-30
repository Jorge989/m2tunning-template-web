import { useTrail, a } from 'react-spring'

import styles from 'style.module.css'
export function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  })
  return (
    <div className={styles.trails-main } {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className={ styles.trial-text}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

// function App() {
//   const [open, set] = useState(true)
//   return (
//     <Trail open={open} onClick={() => set((state) => !state)}>
//       <span>Lorem</span>
//       <span>Ipsum</span>
//       <span>Dolor</span>
//       <span>Sit</span>
//     </Trail>
//   )
// }
