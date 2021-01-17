// import { useEffect, useReducer } from 'react';

// // import dataReducer, { SET_USERS } from '../reducers/dataReducer';

// import axios from 'axios';

// export default useApplicationData = () => {

//   const user = {
//     userID
//   }

//   const [state, setState] = useState({
//     user
//   });

//   const setUser = user => setState({ ...state, user })

//   // const getUserBooks = ()

//   // const [state, dispatch] = useReducer(dataReducer, {
//   //   users: [],
//   //   loading: true,
//   // });

//   // useEffect(() => {
//   //   axios({
//   //     method: 'GET',
//   //     url: '/api/users',
//   //   })
//   //     .then(({ data }) => {
//   //       console.log(data);
//   //       dispatch({ type: SET_USERS, users: data });
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, []);

//   // return {
//   //   state,
//   //   dispatch,
//   // };

// };

// // export default registerUser = () => {
// //   if (state.email.length && state.password.length) {
// //     props.showError(null);
// //     const payload = {
// //       "email": state.email,
// //       "password": state.password,
// //     }
// //     axios.post(API_BASE_URL + '/user/register', payload)
// //       .then(function (response) {
// //         if (response.status === 200) {
// //           setState(prevState => ({
// //             ...prevState,
// //             'successMessage': 'Registration successful. Redirecting to home page..'
// //           }))
// //           redirectToHome();
// //           props.showError(null)
// //         } else {
// //           props.showError("Some error ocurred");
// //         }
// //       })
// //       .catch(function (error) {
// //         console.log(error);
// //       });
// //   } else {
// //     props.showError('Please enter valid username and password')
// //   }

// // };
