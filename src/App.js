import './App.css';
import { React, Component } from 'react';
import Customer from './components/Customer';

const customers =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday': '921212',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'문지혜',
  'birthday': '961222',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'차유진',
  'birthday': '961212',
  'gender' : '여자',
  'job' : '대학생'
}
]
class App extends Component{
  render(){
    return (
      <div>
      {
        //map 함수를 이용해서 반복문처럼 사용할 수 있음 , key값을 꼭 사용해야함
        customers.map(c => {
          return(
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            job={c.job}
          />
          )
        })
      }
      </div>
    );
  }
}

export default App;
