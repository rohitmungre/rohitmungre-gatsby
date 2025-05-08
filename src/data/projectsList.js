import tictactoeThumb from '../../content/labs/SSTTT2.png';
import animationThumb from '../../content/labs/SSAnimation.png';
import fractalThumb from '../../content/labs/SSFractal1.png';
import polarClockThumb from '../../content/labs/SSPolarClock.png';
import tvChartThumb from '../../content/labs/SSTVChart.png';
import tvheatmapThumb from '../../content/labs/SSTVHeatmap.png';


export const projectsList = [
    {
      slug: 'equities',
      name: 'Equities Insights',
      tagline: 'Explore company performance through dynamic charting, fundamentals, and market indicators.',
      date: '2025-04-28',
      demo: '/equities',
      thumbnail: tvChartThumb,
      highlight: true,
    },
    {
      slug: 'market',
      name: 'Stock Market Watch',
      tagline: 'Comprehensive market visualization showcasing live sector trends and stock-level activity.',
      date: '2025-04-27',
      demo: '/market',
      thumbnail: tvheatmapThumb,
      highlight: true,
    },
      {
        slug: 'fractals',
        name: 'Fractals Playground',
        tagline: 'Interactive fractals like Sierpinski triangle and tree, powered by p5.js.',
        date: '2025-04-25',
        demo: '/fractal',
        thumbnail: fractalThumb,
        highlight: true,
      },
      {
        slug: 'polar-clock',
        name: 'Polar Clock Visualization',
        tagline: 'A dynamic polar clock that visualizes time using circular arcs.',
        date: '2025-04-24',
        demo: '/pclock',
        thumbnail: polarClockThumb,
        highlight: true,
      },
      {
        slug: 'lottie',
        name: 'Lottie Animation',
        tagline: 'Render Lottie JSON animations using lottie-react.',
        date: '2025-04-10',
        demo: '/alottie',
        thumbnail: animationThumb,
        highlight: true,
      },  
      {
        slug: 'tictactoe',
        name: 'Tic Tac Toe',
        tagline: 'A simple Tic Tac Toe game built with React and styled components.',
        date: '2025-03-26',
        demo: '/ttt',
        thumbnail: tictactoeThumb,
        highlight: true,
      },
]
