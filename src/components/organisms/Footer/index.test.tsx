import Footer from '.';
import renderer from 'react-test-renderer';


test('render Footer', () => {
    const component = renderer.create(
        <Footer />
    );
  
  expect(component).toMatchSnapshot();
});

