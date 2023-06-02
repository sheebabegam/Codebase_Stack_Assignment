import React, { useRef } from 'react'

function UserData({user, handleEdit, handleDeleteUser}) {
    const userRef = useRef(null)
    return (
            <tr key={user?.id} ref={userRef} onClick ={() => {console.log(userRef.current.target)}} >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>
                        Edit
                    </button>{' '}
                    &nbsp; &nbsp;
                    <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                    </button>
                </td>
            </tr>
    )
}

export default UserData