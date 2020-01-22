import React from 'react';

function Form() {



    return (
        <div className='container'>
            <h1>Add A User</h1>
            <form>
                <div className='inputs'>
                    <input className='half' type='text' placeholder='name' />
                    <input className='half' type='text' placeholder='email' />
                    <input className='whole' type='text' placeholder='role' />
                    <div className='class'>
                    <input className='whole' type='text' placeholder='school/cohort' />
                    <div>
                        <button className='join-btn'>Add Member</button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;