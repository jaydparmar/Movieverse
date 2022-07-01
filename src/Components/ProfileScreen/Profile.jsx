import React from 'react'
import './Profile.css'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Features/UserSlice'
import { useDispatch } from 'react-redux'
const Profile = () => {
    const { user } = useSelector((state) => (
        state.user
    ));
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logoutclick=async(e)=>{
        e.preventDefault();
        await auth.signOut();
        dispatch(logout());
        navigate("/");
      }
    return (
        <div className='profilescreen'>
            <div className="profilebody">
                <h1>Edit Profile</h1>
                <div className="profileinfo">
                    <CgProfile />
                    <div className="profiledetail">
                        <h2>{user.email}</h2>
                        <div className="profileplans">
                            <button
                                onClick={logoutclick}
                                className='profilesignout'>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
