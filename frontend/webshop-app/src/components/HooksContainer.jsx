import React from 'react'

export default function HooksContainer() {
  return (
    <div>
        <CounterWithoutHook/>
        <CounterWithUseState/>
        <CounterWithUseEffect/>
        <CounterWithUseRef/>
    </div>
  )
}
