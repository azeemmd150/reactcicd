

import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";

function Poc() {
  return (
    <div className="App">
      <ReactOneDriveFilePicker
        clientID="c62bf43d-c387-4740-85c3-f0b6c34ecb44"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          alert(JSON.stringify(result));
        }}
        onCancel={(result) => {
          alert(JSON.stringify(result));
        }}
      >
        <button>Click Here</button>
      </ReactOneDriveFilePicker>
    </div>
  );
}

export default Poc;
