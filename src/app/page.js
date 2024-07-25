import Image from "next/image";
import CallStack from "./components/CallStack";
import Closure from "./components/Closure";
import TemporalDeadZone from "./components/TemporalDeadZone";
import FunctionExecution from "./components/VariableLifecycle";
import AsyncExecution from "./components/AsyncExecution";

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>JavaScript Concepts Visualizer</h1>
      <CallStack />
      <TemporalDeadZone />
      <Closure />
      <FunctionExecution />
      <AsyncExecution />
    </div>
  );
}