import React from 'react';
import CounterWithoutHook from './components/hooks/CounterWithoutHook.jsx';
import CounterWithUseState from './components/hooks/CounterWithUseState.jsx';
import CounterWithUseEffect from './components/hooks/CounterWithUseEffect.jsx';
import CounterWithUseRef from './components/hooks/CounterWithUseRef.jsx';

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
