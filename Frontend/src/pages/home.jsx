import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();  // Works inside RouterProvider

  const goToAbout = () => navigate('/about');
  const goBack = () => navigate(-1);

  return (
    <>
      <h1>Hello World from Home</h1>
      <button onClick={goToAbout}>Go to About</button>
      <button onClick={goBack}>Go Back</button>
    </>
  );
}

export default Home;
