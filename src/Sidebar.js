import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Sidebar(){
    return(
        <div class='bg-dark text-white p-4' style={{ height:"100vh" }}>
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Sidebar</span>
          </a>
        <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                    Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/workouts" class="nav-link text-white">
                        Workouts
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    Customers
                    </a>
                </li>
            </ul>
           <hr />



            <a class="d-flex align-items-center text-white text-decoration-none">Sign Out</a>

        </div>
    );
}

export default Sidebar;