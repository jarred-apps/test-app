import axios from "axios";
import {useState} from "react";

export default function Home() {
  const [data, setData] = useState<Record<string, any>>({});

  async function sendRequest() {
    axios.request({method: "GET", url: "/api/test"})
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <div className='app'>
        <div className='content'>
          <h1>Test App</h1>
          <p>Welcome!</p>
          <button onClick={() => sendRequest()}>Test</button>
          <p>{JSON.stringify(data)}</p>
        </div>
      </div>
    </>
  )
}