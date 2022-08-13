# react-network-detect


![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-network-detect)
[![GitHub license](https://img.shields.io/github/license/geekskai/react-network-detect)](https://github.com/geekskai/react-network-detect/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/react-network-detect.svg)](https://www.npmjs.com/package/react-network-detect)
[![npm downloads](https://img.shields.io/npm/dm/react-network-detect.svg)](https://www.npmjs.com/package/react-network-detect)
[![GitHub stars](https://img.shields.io/github/stars/geekskai/react-network-detect)](https://github.com/geekskai/react-network-detect/stargazers)



react network detection hooks


## install

`npm install react-network-detect`

or

`yarn add react-network-detect`

## demo 
[codesandbox](https://codesandbox.io/s/awesome-lovelace-f9g8lf?file=/src/App.tsx)


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
