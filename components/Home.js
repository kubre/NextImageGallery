import App from "./App";
import { SearchQueryProvider } from "./SearchQueryContext";

function Home() {
  return (
    <SearchQueryProvider>
      <App />
    </SearchQueryProvider>
  );
}

export default Home;
