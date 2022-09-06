import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByRole("link", { name: /learn react/i });
  // expect(linkElement).toBeInTheDocument();
});

test("button has correct initial color", () => {
 render (<App />)

 // find an element with a tole of button and text of 'Change to blue'
const colorButton = screen.getByRole('button', { name : 'Change to blue'});


expect(colorButton).toHaveStyle({backgroundColor: 'red'})

// click button
fireEvent.click(colorButton);

//expect the background color to be blue
expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

// expect the button text to be "Change to red"
expect(colorButton.textContent).toBe('Change to red');

});

test("initial conditions", () => {

  render (<App />)
  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});

expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();


});

test('Checkbox disables button on first click and enables on the second', ()=>{
  render (<App />)
  
  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();

});
