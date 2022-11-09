import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});
chart.data([
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
]);

chart
  .interval()
  .encode('x', 'genre')
  .encode('y', 'sold')
  .encode('color', 'genre')
  .animate('enter', { type: 'scaleInY', duration: 1000 })
  .animate('exit', { type: 'scaleOutY', duration: 2000 });

chart.render();
