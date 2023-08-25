import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Home() {

// return new Promise(async (resolve, reject) => {
  //   try {
  //     const response = await axios.get('http https://swapi.dev/api/people/1/' , Promise);
  //     if (response.status === 200) {
  //       dispatch(postsAction.setPosts(response.data));
  //     }
  //     resolve(response);
  //   } catch (error) {
  //     console.error('Error fetching posts:', error);
  //     throw error;
  //   }
  // });

return (
  <div className="home-container">
    <Navbar />
  </div>
)
};