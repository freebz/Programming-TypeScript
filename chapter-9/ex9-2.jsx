// 9.1.1 리액트

<ul class='list'>
  <li>Homemade granola with yogurt</li>
  <li>Fantastic french toast with fruit</li>
  <li>Tortilla Espanola with salad</li>
</ul>



React.createElement(
  'ul',
  { 'class': 'list' },
  React.createElement(
    'li',
    null,
    'Homemade granola with yogurt'
  ),
  React.createElement(
    'li',
    null,
    'Fantastic French toast with fruit'
  ),
  React.createElement(
    'li',
    null,
    'Tortilla Espanola with salad'
  )
);
