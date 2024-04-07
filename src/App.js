import './App.css';

// 👇️ import the image
import MyBackgroundImage from './background-image.jpg';

export default function App() {
  const externalImage =
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp';

  return (
    <div
      style={{
        backgroundImage: `url(${MyBackgroundImage})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
      }}
    >
      <h2 style={{color: 'white'}}>Hello world</h2>
    </div>
  );
}
