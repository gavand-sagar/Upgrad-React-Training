import React from 'react'
import SimpleTodoApp from './SimpleTodoApp'
import { Button, CircularProgress, Rating } from '@mui/material'
import StateDemo from './StateDemo'
import { styled } from '@mui/system';

const MyCustomizedButton = styled(Button)({
  color: 'white',
  backgroundColor: 'green',
  padding: 8,
  borderRadius: 4,
});

//Higher Order functions - any function that takes other function as argument and returns new function

//Higher order components - any components that takes other components as prop and returns new components


function MyButton() {
    return <button>Hello</button>
}

function WithLoading(Component) {
    return function ({ loading, ...props }) {
        return loading ? <CircularProgress /> : <Component {...props} />
    }
}


function WithRole(Component){
    return function ({userRole,...props}){
        if(userRole === localStorage.getItem("role")){
            return <Component {...props}/>
        }else{
            return <p>not having access to this view</p>
        }
    }
}


const ButtonWithRole = WithRole(MyButton)
const StateDemoWithRole = WithRole(StateDemo)

const MyButtonWithLoading = WithLoading(MyButton)

const RatingWithLoading = WithLoading(Rating)

export default function HOCDemo() {
    return (
        <div>
            <h1>HOCDemo</h1>


            {/* MyButton do not have ability to accept prop like  userRole={'admin'}*/}
            <MyButton userRole={'admin'}></MyButton>

            {/* Same MyButton component now has userRole={'admin'}*/}
            <ButtonWithRole userRole={'admin'}/>

            {/* <Rating value={1}/> */}

            {/* <RatingWithLoading onChange={(e) => alert(e.target.value)} value={4} loading={true} /> */}

            {/* <Button loading={true} variant='contained'>Login</Button> */}
        
            <Button>NORMAL MUI BUTTON</Button>
            <MyCustomizedButton>THIS IS Customized with HOC</MyCustomizedButton>
        </div>
    )
}
