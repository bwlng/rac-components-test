import * as React from "react";
import { Button } from "@bwlng/troubleshooting-design-system";
import { DialogTrigger, Popover } from "react-aria-components";

function App() {
  return (
    <>
      <DialogTrigger>
        <Button>Open Dialog</Button>
        <Popover>Dial</Popover>
      </DialogTrigger>
    </>
  );
}

export default App;
