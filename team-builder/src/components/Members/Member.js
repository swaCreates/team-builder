import React from 'react'
import {Card} from 'reactstrap';

function Member(props) {



    return (
        <div className='containerTwo'>

            {props.members.map(member =>{
               return <Card className='card'>
                    <h1 className='memberh1'> Name: {member.name}</h1>
                    <p>Role: {member.role}</p>
                    <p>School/Cohort: {member.school}</p>
                </Card>
            })}
        </div>
    )
}

export default Member;