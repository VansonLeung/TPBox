# TPBox

A functional layout-by-properties box view. Now supports ReactJS and WebComponents.

A shorthand support of `inline styles` - except not as dirty.

An isolation of layout wrappers and business logics.

An inspiration by / alternative of using `tailwind.css`.

An alternative to do quick layout customization without bothering your CSS files.

----

## How to install

----

```jsx
// React

import { TPBox } from './TPBox/reactjs/TPBox'
```

```jsx
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

```html
// web-components.org

<head>

...

<!-- import webcomponents polyfill bundle -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.min.js"></script>

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

----

### Quick use

```jsx
// React

<TPBox rel column aCenter jSpaceBetween wfullv hfullv>   {/* Full window screen size, flex column, align items center, justify contents space-between, position relative */}
  <TPBox row aCenter jCenter wfull>                      {/* Full relative width, flex row, align items center, justify contents center */}
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </TPBox>
</TPBox>


// is equivalent to
// webcomponents

<tp-box rel column a-center j-space-between wfullv hfullv>   <!-- Full window screen size, flex column, align items center, justify contents space-between, position relative -->
  <tp-box row a-center j-center wfull>                       <!-- Full relative width, flex row, align items center, justify contents center -->
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </TPBox>
</TPBox>
```





