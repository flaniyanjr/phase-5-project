import { Box, Button, FormControl, TextField, InputLabel } from '@mui/material';
import {useFormik} from 'formik'
import * as yup from 'yup';
import {useState} from 'react'

function Signup({setUser}) {

    const [signup, setSignup]= useState(true)

    const signupSchema= yup.object().shape({
        username: yup.string().min(5, 'Username is too short!').max(15, 'Username is too Long!').required('Username Required'),
        email: yup.string().email('Invalid email').required('Email Required'),
        password: yup.string().min(5, 'Password is too short!').max(15, 'Password is too Long!').required('Password Required'),
        passwordConfirmation: yup.string().required('Confirm Password').oneOf([yup.ref('password')], 'Password must match')
    })

    const loginSchema= yup.object().shape({
        username: yup.string(),
        password: yup.string()
    })


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signup ? signupSchema: loginSchema,
        onSubmit: (values) => {
            const endpoint= signup ? '/users' : '/login'
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(({ user }) => {
                        setUser(user)
                        // navigate into site
                    })
                } else {
                    
                    console.log('errors? handle them')
                }
            })
        }
    })

    function toggleSignup() {
        setSignup(current => !current)
    }

    return(
        <Box className= 'signup-container'>
            {/* {Object.keys(formik.errors).map((key) => <li>{formik.errors[key]}</li>)} */}

            <div className= 'signup-field form'>
                <Button onClick={toggleSignup} id='signup-button'>{signup ? 'Login' : 'Register'}</Button>
            
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                    id="username" 
                    label="Username" 
                    variant="outlined"
                    error= {!!formik.errors.username} 
                    helperText= {formik.errors.username}
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className='signup-input'
                    />
                    {/* {formik.errors.username && <li>{formik.errors.username}</li>} */}
                    {signup && <TextField 
                        id="email" 
                        label="email" 
                        variant="outlined" 
                        color= 'secondary'
                        error= {!!formik.errors.email}
                        helperText= {formik.errors.email}
                        required 
                        value= {formik.values.email} 
                        onChange={formik.handleChange}
                        className='signup-input'
                    />}
                    {/* {formik.errors.email && <li>{formik.errors.email}</li>} */}
                    <TextField 
                        id="password" 
                        label="password" 
                        type="password"
                        variant="outlined" 
                        error= {!!formik.errors.password}
                        helperText= {formik.errors.password}
                        required 
                        value={formik.values.password} 
                        onChange={formik.handleChange}
                        className='signup-input'
                    />
                    {/* {formik.errors.password && <li>{formik.errors.password}</li>} */}
                    {signup && <TextField 
                        id="passwordConfirmation" 
                        label="re-enter password" 
                        type="password"
                        variant="outlined" 
                        error= {!!formik.errors.passwordConfirmation}
                        helperText= {formik.errors.passwordConfirmation}
                        required 
                        value={formik.values.passwordConfirmation} 
                        onChange={formik.handleChange}
                        className='signup-input'
                    />}
                    {/* {formik.errors.passwordConfirmation && <li>{formik.errors.passwordConfirmation}</li>} */}
                    <div id= 'signup-submit' >
                        <Button id= 'signup-submit' variant='contained' type='submit'>Submit</Button>
                    </div>
                </form>
            </div>
        </Box>
    )
}

export default Signup