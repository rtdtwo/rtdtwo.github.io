import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <Container className='text-center'>
      <div className='mt-5'>
        <Image roundedCircle src='/boston_swag.jpeg' width={200} />
        <h2 className='mt-4'>Hi, I'm Rishabh!</h2>
        <p className='p-0 m-0'>Computer Science, MS</p>
        <p className='p-0 m-0'>University of Florida, 2023</p>
        <small><p className='mt-4'>tatiraju.rishabh@gmail.com</p></small>
      </div>
      <div className='mt-5'>
        <h5>On the web</h5>
        <a href='https://rishabh.blog'>Personal Website</a>
        <br />
        <a href='https://rtdtwo.medium.com'>Medium Blog</a>
      </div>
      <div className='mt-4'>
        <h5>GitHub Projects</h5>
        <a href='https://rtdtwo.github.io/voyager'>Voyager</a>
        <br />
        <a href='https://rtdtwo.github.io/weathair'>WeathAir</a>
      </div>
    </Container>
  );
}

export default App;
