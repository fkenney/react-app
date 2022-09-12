import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Doughnut } from 'react-chartjs-2';

const user = {
    name : "Test User",
    calories : 100,
    weight: "300lbs",
    workouts: 30,
}

const info = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



function Dashboard(){
    return(
        <div class="rounded p-2 w-100 bg-primary h-50 shadow">
            <h1>Hi, {user.name}</h1>
            <p>Calories - {user.calories}</p>
            <p>Weight - {user.weight}</p>
            <p>Weight - {user.weight}</p>

            <Doughnut data={info} />
        </div>
    )
}

export default Dashboard;