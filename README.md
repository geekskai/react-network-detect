# react-network-detect

react network detection hooks

## install

`npm install react-network-detect`

or

`yarn add react-network-detect`

## use
###  useOnlineEffect 
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

###  useNetworkStatus

`import { useNetworkStatus } from 'react-network-detect';`

```
const App = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img src='...' alt='low resolution' />;
      break;
    case '2g':
      media = <img src='...' alt='medium resolution' />;
      break;
    case '3g':
      media = <img src='...' alt='high resolution' />;
      break;
    case '4g':
      media = <video muted controls>...</video>;
      break;
    default:
      media = <video muted controls>...</video>;
      break;
  }
  
  return <div>{media}</div>;
};
```
