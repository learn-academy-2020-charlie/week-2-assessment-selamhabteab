# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:
      Super is used in conjunction with "constructor" which will call functions from a parent class.

  Researched answer:
      When used in a constructor, the super keyword appears alone and must be used before the "this" keyword is used. The super keyword can also be used to call functions on a parent object. super() will call the constructor of its parent class. This is required when you need to access some variables from the parent class. In React, when you call super with props. React will make props available across the component through this.props .
        - taken from LearnAcademy lesson plan + MDN



2. What is a virtual DOM?
  Your answer:
      I think it stands for domain object manager and its purpose is to manage how the code translates to the interface.

  Researched answer:
      In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.

      A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

      Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.
        - taken from CodeCademy!



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
        class Name extends Component {
          render (){
            <h1> Hello World</h1>
          }
        }

  Researched answer:
        class Name extends React.Component {
          render (){
            return(
              <h1> Hello World</h1>
              )
            }
          }
          export default Name;

4. What is JSX?

  Your answer:
      It's a special type of javascript language used in React.

  Researched answer:
      JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
        - taken from W3Schools



5. What is state in React?

  Your answer:
      I still don't really understand what state is.

  Researched answer:
      React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I'm not quite sure and can look it up for an accurate answer.

  Researched answer: js behavior where var declaration at any scope is moved up



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
- event.preventDefault()
- DOM events
- React props
- onChange
