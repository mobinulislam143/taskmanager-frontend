import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UserStore from '../Store/UserStore';


function Profile(props) {
    const { userProfileRequest, ProfileDetails, ProfileImageChangeRequest } = UserStore();

    useEffect(() => {
        (async () => {
            await userProfileRequest();
        })();
    }, []);

    const [imageSrc, setImageSrc] = useState(ProfileDetails?.profileImg || ProfileDetails.profileImg
    );

    const [isUploading, setUploading] = useState(false)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const Imgupload = async () => {
        try {
            const fileInput = document.getElementById('imageInput');
            const imageData = fileInput.files[0];
            if (imageData) {
                setUploading(true)
                const success = await ProfileImageChangeRequest(imageData);
                setUploading(false)
                if (success) {
                    console.log('image Update successfully')
                    toast.success('Profile image updated successfully');
                } else {
                    console.log('image cannot update')
                    toast.error('Failed to update profile image');
                }
            } else {
                toast.error('No image selected');
            }
        } catch (error) {
            console.log('Error uploading profile image:', error);
            setUploading(false)
        }
    };

    // Check if ProfileDetails is null or undefined before rendering
    if (!ProfileDetails) {
        return null; 
    }

    return (
        <div className='container-fluid'>
            <div className='container mx-auto my-14'>
                <div className='image flex flex-col items-center'>
                    <label htmlFor='imageInput'>
                        <img src={imageSrc} className='w-32 h-32 rounded-full align-center cursor-pointer my-3 hover:opacity-75 transition-all' alt='Profile' />
                    </label>
                    <input id='imageInput' type='file' accept='image/*' onChange={handleImageChange} className='hidden' />
                    {
                        isUploading? (
                            <button className='btn bg-yellow-500 my-3 border-none text-black'  disabled>Uploading...</button>
                        ):(
                            <button onClick={Imgupload} className='btn bg-yellow-500 my-3 border-none text-black'  >Upload</button>
                        )
                    }
                </div>
                <div className='card shadow-sm p-4 bg-white my-4 text-black'>
                    <h1 className='text-2xl font-semibold my-3'>Name: <span className='font-thin'>{ProfileDetails.name}</span></h1>
                    <h1 className='text-2xl font-semibold my-3'>email: <span className='font-thin'>{ProfileDetails.email}</span></h1>
                    <h1 className='text-2xl font-semibold my-3'>Mobile: <span className='font-thin'>{ProfileDetails.mobile}</span></h1>
                    <h1 className='text-2xl font-semibold my-3'>Department: <span className='font-thin'>{ProfileDetails.department}</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Profile;
