import React from 'react'
import Navbar from './components/Login-Page/Navbar/Navbar'
// import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // const dispatch = useDispatch();

  // async function handleAddPost() {
  //     dispatch(postsActions.setLoading(true));
  //     try {
  //       const params = {
  //         title: 'Test Post',
  //         body: 'Content Dummy',
  //         userId: 1
  //       };
  //       const response = await axios.post('http https://swapi.dev/api/people/1/', params);
  //       if (response.status === 201) {
  //         alert('Post successfully created!');
  //         dispatch(postsActions.setPosts([...posts, formData]));
  //         handleClose();
  //       }
  //       dispatch(postsActions.setLoading(false));

  //     } catch (exception) {
  //       console.log(exception);
  //       dispatch(postsActions.setLoading(false));
  //     }
  //   }
  return (

    <div className="shome-container">
      <Navbar/>
      {/* <h2> WELCOME TO THE HOME PAGE OF STAR-WARS</h2> */}
    </div>
  )
}