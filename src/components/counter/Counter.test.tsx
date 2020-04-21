import Counter from '../counter';

describe('Counter', () => {

  it('render conrrectly', () => {
    const el = renderer
        .create(<Counter />)
        .toJSON();
    expect(el).toMatchSnapshot();
  });

  it('should call onChange when button is clicked', () => {
    const mockFunction = jest.fn();
    const  el = renderer.create(<Counter onChange={mockFunction} />);
    el.root.findAllByType('button')[0].props.onClick();
    expect(mockFunction).toHaveBeenCalled();
  });
});
