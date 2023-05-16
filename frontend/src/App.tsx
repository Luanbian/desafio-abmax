import axios from "axios";
import Routes from "./routes/Routes";
import { SWRConfig } from 'swr';

export default function App() {
  return (
    <>
      <SWRConfig 
        value={{
          fetcher: (url: string) => axios.get(url).then(res => res.data.results)
        }}
      >
        <Routes/>
      </SWRConfig>
    </>
  )
}