import React, {useState} from 'react';

function Form(props) {
    console.log(props);

    const [member, setMember]= useState({
        name: '',
        role: '',
        school: '',
    });

    const handleChanges= event =>{
        setMember({...member, [event.target.id]: event.target.value});
    };

    const submitHandler= event =>{
        event.preventDefault();
        const newMember= {
            ...member,
        }

        props.addNewMember(newMember);
        setMember({
            name: '',
            role: '',
            school: '',
        })
    };

    return (
        <div className='container'>
            <h1>Add A User</h1>
            <form onSubmit={submitHandler}>
                <div className='inputs'>
                    <input onChange={handleChanges} className='half' id='name' type='text' placeholder='name' />
                    <input className='half' id='email' type='text' placeholder='email' />
                    <input onChange={handleChanges} className='whole' type='text' placeholder='role' />
                    <div className='class'>
                    <input onChange={handleChanges} className='whole' id='school' type='text' placeholder='school/cohort' />
                    <div>
                        <button type='submit' className='join-btn'>Add Member
                        </button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;