import Loader from './'

/*
# Loader
Индикатор загрузки, информирует пользователя что в данный момент что-то подгружается или обрабатывается

```js
import { Loader } from 'loft-ui'
```

## Простой пример
```jsx
<Loader />
```
<Loader />

## Варианты дизайна
```jsx
<Loader variant="circle" />
<Loader variant="dots" />
```
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Loader variant="circle" />
  <Loader variant="dots" style={{ marginLeft: 8 }} />
</div>

## Размеры
```jsx
<Loader variant="circle" size='xl' />
<Loader variant="circle" size='l' />
<Loader variant="circle" size='m' />
<Loader variant="circle" size='s' />

<Loader variant="dots" size='xl' />
<Loader variant="dots" size='l' />
<Loader variant="dots" size='m' />
<Loader variant="dots" size='s' />
```
<div style={{ display: 'flex' }}>
  <Loader variant="circle" size='xl' />
  <Loader variant="circle" size='l' />
  <Loader variant="circle" size='m' />
  <Loader variant="circle" size='s' />
</div>

<div style={{ display: 'flex', marginTop: '36px' }}>
  <Loader variant="dots" size='xl' style={{ marginRight: '24px' }} />
  <Loader variant="dots" size='l' style={{ marginRight: '24px' }} />
  <Loader variant="dots" size='m' style={{ marginRight: '24px' }} />
  <Loader variant="dots" size='s' style={{ marginRight: '24px' }} />
</div>

## Цвет
Можно пременить любой цвет, передавая его в проп `color`
```jsx
<Loader variant="circle" color='green' />
<Loader variant="circle" color='#a02338' />
<Loader variant="dots" color='#888888' />
```
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Loader variant="circle" color='green' />
  <Loader variant="circle" color='#a02338' />
  <Loader variant="dots" color='#888888' style={{ marginLeft: 8 }} />
</div>
*/
