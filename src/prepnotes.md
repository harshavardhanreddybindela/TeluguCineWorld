### Basic Notes of React

#### 1. Props

- **Definition**: "Props" stands for properties. They are read-only attributes used to pass data from a parent component to a child component in React.
- **Usage**: Props are used to customize and configure components with different data or behavior.
- **Example**:

  ```jsx
  function ChildComponent(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  function ParentComponent() {
    return <ChildComponent name="John" />;
  }
  ```

  In this example, `name="John"` is passed as a prop to `ChildComponent`, and it can be accessed using `props.name`.

#### 2. useState

- **Definition**: `useState` is a Hook that allows you to add state to functional components in React.
- **Usage**: It returns an array with two elements: the current state value and a function to update it.
- **Example**:

  ```jsx
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

  export default Counter;
  ```

  In this example, `count` is the state variable, and `setCount` is the function to update `count`. The initial state is set to `0`.

#### 3. useEffect

- **Definition**: `useEffect` is a Hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
- **Usage**: It takes a function and an optional dependency array. The function runs after the component renders and whenever dependencies change.
- **Example**:

  ```jsx
  import React, { useEffect, useState } from 'react';

  function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // Empty array means this effect runs only once after the initial render

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  export default DataFetcher;
  ```

  In this example, `useEffect` fetches data from an API when the component first renders. The empty dependency array `[]` ensures it only runs once.

### Additional Concepts

#### JSX

- **Definition**: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code in React components.
- **Usage**: JSX makes it easier to create React elements and components.
- **Example**:

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

#### Components

- **Definition**: Components are the building blocks of a React application. They can be functional or class-based.
- **Usage**: Components allow you to break down the UI into reusable, self-contained pieces.
- **Example**:

  - **Functional Component**:

    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```

  - **Class Component**:

    ```jsx
    import React, { Component } from 'react';

    class Welcome extends Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```

#### State

- **Definition**: State is a built-in object used to hold data that may change over the lifetime of the component.
- **Usage**: State can be modified using `this.setState` in class components or `useState` in functional components.
- **Example**:

  - **Class Component**:

    ```jsx
    class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        return (
          <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Click me
            </button>
          </div>
        );
      }
    }
    ```

  - **Functional Component** (using `useState`):

    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }
    ```

#### Third Party API's and Styles information
    1. I have used the Tailwind for the styling and awesome.com for getting icons
    2. For the film API's TMDb website