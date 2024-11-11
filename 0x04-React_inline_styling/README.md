# 0x04-React Inline Styling

This project covers inline styling in React, focusing on how to apply styles directly within components using JavaScript objects.

## Key Concepts

- **Inline Styling**: Use JavaScript objects to define styles directly in components.
- **Dynamic Styling**: Modify styles based on component state or props.
- **CSS-in-JS**: Understand inline styling as an approach in CSS-in-JS, allowing scoped styles within a component.

## Usage

Define styles as JavaScript objects and apply them using the `style` attribute:

```javascript
function MyComponent() {
  const style = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px'
  };

  return <div style={style}>Styled Component</div>;
}
