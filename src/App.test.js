import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces} from './App';

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
  
  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

});

test ('Disabled button turns gray when disabled and reverts to red', ()=>{

  render(<App />)

  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});

// disable button 
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color :gray');

//re-enable button
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color: red');

});

test ('Check if button turns gray when disabled and reverts to blue', ()=>{

  render(<App />)

  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});

  // change button to blue
fireEvent.click(colorButton);

// disable button 
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color :gray');

//re-enable button
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle("background-color: blue");

});

describe('spaces before camel-case capital letters', ()=>{
 test('Works for no inner capital letters', ()=>{
  expect(replaceCamelWithSpaces('Red')).toBe('Red');

 });
 test('Works for one inner capital letter', ()=>{
  expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
 });

 test  ('Works for multiple innter capital letters', ()=>{
  expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')

 });
});
