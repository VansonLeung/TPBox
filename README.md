# TPBox

A functional layout-by-properties box view. Now supports ReactJS and WebComponents.

A shorthand support of `inline styles`.

An isolation of layout wrappers and business logics.

An inspiration by / alternative of using `tailwind.css`.

----

## How to install

----

```
// React

import { TPBox } from './TPBox/reactjs/TPBox'
```

```
// React


<TPBox
  row
  taCenter
  vaMiddle
  aCenter
  jSpaceBetween
  ph={20}
  pv={30}
  m={15}
  wfullv
  h={`300px`}
  min-w={150}
  max-w={300}
  flex={1}
  gap={10px}
  o-auto
  oy-scroll
  ox-hidden
  rel
  abs
  fixed
  t={0}
  b={10}
  l={20}
  r={30}
  transform={`scale(1.5, 1.5)`}
  transition-sec={3}
  font-size={`20sp`}
  font-family={`Arial, Verdana, Times New Roman`}
  opacity={0.5}
  pointer-events-none
  bg={`rgba(255,255,128, 0.5)`}
  color={`green`}
  pre
  border={`1px solid #999`}
  border-radius={15}
>
  This is inside the TPBox element.
</TPBox>


```


----

```
// web-components.org

<head>

...

<!-- import webcomponents polyfill bundle -->
<script src="./webcomponentsjs/webcomponents-bundle.js"></script>

<!-- import <tp-box> -->
<script src="./TPBox/webcomponents/tpbox.js"></script>


</head>


<body>

...

<tp-box
  row
  ta-center
  va-middle
  a-center
  j-space-between
  ph='20'
  pv='30'
  m='15'
  wfullv
  h='300px'
  min-w='150'
  max-w='300'
  flex='1'
  gap='10px'
  o-auto
  oy-scroll
  ox-hidden
  rel
  abs
  fixed
  t='0'
  b='10'
  l='20'
  r='30'
  transform='scale(1.5, 1.5)'
  transition-sec='3'
  font-size='20sp'
  font-family='Arial, Verdana, Times New Roman'
  opacity='0.5'
  pointer-events-none
  bg='rgba(255,255,128, 0.5)'
  color='green'
  pre
  border='1px solid #999'
  border-radius='15' 
>
  This is inside the TPBox element.
</tp-box>

...

</body>

```




