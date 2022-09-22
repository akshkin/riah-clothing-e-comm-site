import { Outlet } from 'react-router-dom'
import Directory from "../../components/category-item/directory/directory.components";
import {categories} from "../../components/category-item/directory/directory.components"


function Home() {
  

  return (
    <div>
        <Directory categories={categories}/>
        <Outlet />
    </div>
    
  );
}

export default Home;
