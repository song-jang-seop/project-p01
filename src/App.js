import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [{
    'id': 1,
    'image': 'https://placeimg.com/164/164/1',
    'name': '홍길동1',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
},{
    'id': 2,
    'image': 'https://placeimg.com/164/164/2',
    'name': '홍길동2',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
},{
    'id': 3,
    'image': 'https://placeimg.com/164/164/3',
    'name': '홍길동3',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
}

]

class App extends Component {
    render() {
        return (
            <div>
                {
                    customer.map(c => {
                        return(
                            <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                            />
                        );
                    }
                    )
                }
            </div>

        );
    }
}

export default App;