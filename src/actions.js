
// export const UPDATE_FULL_NAME = 'UPDATE_FULL_NAME';
// export const UPDATE_EMAIL = 'UPDATE_EMAIL';

// export const updateFullName = (fullName) => ({
//   type: UPDATE_FULL_NAME,
//   payload: fullName,
// });

// export const updateEmail = (email) => ({
//   type: UPDATE_EMAIL,
//   payload: email,
// });

export const setEmail = (email) => ({ type: 'SET_EMAIL', payload: email });
export const setPass = (pass) => ({ type: 'SET_PASS', payload: pass });
export const setName = (name) => ({ type: 'SET_NAME', payload: name });