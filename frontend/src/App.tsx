import axios from "axios";
import Routes from "./routes/Routes";
import { SWRConfig } from 'swr';

export default function App() {
  return (
    <>
      <SWRConfig 
        value={{
          refreshInterval: 3000,
          fetcher: (url: string) => axios.get(url).then(res => res.data.data)
        }}
      >
        <Routes/>
      </SWRConfig>
    </>
  )
}