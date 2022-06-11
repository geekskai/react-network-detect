# react-network-detect

react network detection hooks

## install

`npm install react-network-detect`

or

`yarn add react-network-detect`

## use

`import { useOnlineEffect } from 'react-network-detect';`

```

function App() {
  const { isOnline } = useOnlineEffect();

  return (
    <div className="App">
     {
        isOnline?'this is online':'oh network error!'
     }
    </div>
  );
}

```
