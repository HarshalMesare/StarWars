import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Home() {
  // const dispatch = useDispatch();

  // async function handleAddPost() {
  //     dispatch(peopleActions.setLoading(true));
  //     try {
  //       const params = {
  //         title: 'Test Post',
  //         body: 'Content Dummy',
  //         userId: 1
  //       };
  //       const response = await axios.post('http https://swapi.dev/api/people/1/', params);
  //       if (response.status === 201) {
  //         alert('Post successfully created!');
  //         dispatch(peopleActions.setpeople([...people, formData]));
  //         handleClose();
  //       }
  //       dispatch(peopleActions.setLoading(false));

  //     } catch (exception) {
  //       console.log(exception);
  //       dispatch(peopleActions.setLoading(false));
  //     }
  //   }
  return (

    <div className="shome-container">
      <Navbar/>
      {/* <h2> WELCOME TO THE HOME PAGE OF STAR-WARS</h2> */}
    </div>
  )
}