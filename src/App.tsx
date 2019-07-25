import React, { useEffect } from "react";
import logo from "./logo.svg";
import useForm, { FormContext } from "./src";
import Test from "./Test";
import "./App.css";

const App: React.FC = () => {
  const methods = useForm<{
    wtf2: string;
    what: string;
  }>();
  console.log(methods.errors);
  const { triggerValidation } = methods;
  const onSubmit = (d: any) => console.log(d);

  useEffect(() => {
    triggerValidation([
      {
        name: "what"
      },
      {
        name: "wtf2"
      }
    ]);
  }, []);

  methods.setError("what", "sdfsdf");

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input
          name="wtf2"
          type="test"
          ref={methods.register({ required: true })}
        />
        <Test />
        <button
          type="button"
          onClick={() => {
            methods.setValue("wtf2", "wath", true);
          }}
        >
          setValue
        </button>
        <button>send</button>
      </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </FormContext>
  );
};

export default App;
