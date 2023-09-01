import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdrfghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*_+()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, char, setpassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number.char, passwordgenerator]);

  const copyPasswordClipboard = useCallback(() => {

    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);

  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-700">
        <h1 className="text-center py-4 text-white ">Password Generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-7">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
          />

          <button
            onClick={copyPasswordClipboard}
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
          >
            {" "}
            copy{" "}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              useRef={passwordRef}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label> Length : {length}</label>
          </div>

          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                number((prev) => !pre);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="charInput"
              onChange={() => {
                char((prev) => !pre);
              }}
            />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
