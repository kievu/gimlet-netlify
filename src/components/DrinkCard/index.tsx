import React, { useState } from "react"
import { useSprings, interpolate } from "react-spring"
import { useGesture } from "react-use-gesture"
import Title from "./Title"
import Card from "./Card"
import CardImage from "./CardImage"
import { to, from, trans } from "./helpers"

function DrinkCard({ drinks }) {
  const [gone] = useState<Set<number>>(() => new Set())
  const [props, set] = useSprings(drinks.length, i => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      set(i => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === drinks.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600)
    }
  )

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <CardImage
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${drinks[i].strDrinkThumb})`,
        }}
      >
        <div style={{ padding: 12 }}>
          <Title>{drinks[i].strDrink}</Title>
        </div>
      </CardImage>
    </Card>
  ))
}

export default DrinkCard
