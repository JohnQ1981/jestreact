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

test("button has correct initial text", () => {


});

test('button turns blue when clicked', ()=>{


});
