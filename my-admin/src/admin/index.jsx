import { Admin, Resource, ListGuesser } from "react-admin";
import {supabaseDataProvider } from "ra-supabase"
import { supabase } from "../supabase.js";
import { Dashboard } from "./Dashboard.jsx";
import { CalendarPage} from "./Calendar.jsx"

const dataProvider = supabaseDataProvider({
  instanceUrl: import.meta.env.VITE_SUPABASE_URL,
  apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  supabaseClient: supabase,}
 )

const App = () => (
  <Admin dataProvider={dataProvider} dashboard ={Dashboard}>
    <Resource name="customers" list={ListGuesser} />
    <Resource name="foods" list={ListGuesser} />
    <Resource name="sales" list={ListGuesser}/>
    <CustomRoutes>
      <Route path="/calendar" element={<CalendarPage/>}/>
    </CustomRoutes>
  </Admin>
);

export default App;