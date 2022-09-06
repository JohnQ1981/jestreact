import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces} from './App';

// test("renders learn react link", () => {
//   render(<App />);
//   // const linkElement = screen.getByRole("link", { name: /learn react/i });
//   // expect(linkElement).toBeInTheDocument();
// });

test("button has correct initial color", () => {
 render (<App />)

 // find an element with a tole of button and text of 'Change to Midnight Blue'
const colorButton = screen.getByRole('button', { name : 'Change to Midnight Blue'});


expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

// click button
fireEvent.click(colorButton);

//expect the background color to be Midnight blue
expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

// expect the button text to be "Change to Medium Violet Red"
expect(colorButton.textContent).toBe('Change to Medium Violet Red');

});

test("initial conditions", () => {

  render (<App />)
  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : 'Change to Midnight Blue'});

expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();


});

test('Checkbox disables button on first click and enables on the second', ()=>{
  render (<App />)
  
  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to Midnight Blue'});

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

});

test ('Disabled button turns gray when disabled and reverts to Medium Violet Red', ()=>{

  render(<App />)

  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to Midnight Blue'});

// disable button 
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color :gray');

//re-enable button
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color: MediumVioletRed');

});

test ('Check if button turns gray when disabled and reverts to MidnightBlue', ()=>{

  render(<App />)

  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });
  const colorButton = screen.getByRole('button', {name : 'Change to Midnight Blue'});

  // change button to blue
fireEvent.click(colorButton);

// disable button 
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle('background-color :gray');

//re-enable button
fireEvent.click(checkBox);
expect(colorButton).toHaveStyle("background-color: MidnightBlue");

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
