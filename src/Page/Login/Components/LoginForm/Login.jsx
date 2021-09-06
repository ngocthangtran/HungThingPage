import { Button, Checkbox, makeStyles, } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import TextFieldCustom from 'CustomField/TextField/TextFieldCustom';
import { Formik, Form, FastField } from 'formik';
import React from 'react';

const useStyel = makeStyles({
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    img: {
        width: '2.5rem',
        height: '2.5rem',
        objectFit: 'cover',
        marginInline: '0.5rem'
    },
    icon: {
        display: 'flex',
        margin: '1rem 0'
    },
    loginWith: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

const StyleButton = withStyles({
    root: {
        backgroundImage: 'linear-gradient(120deg, #61d9de,#6c5ce7)',
        borderRadius: '50px',
        paddingTop: '1rem',
        marginBottom: '1rem'
    }
})(Button)

function Login(props) {
    const classes = useStyel();
    const initialValues = {
        'username': '',
        'password': '',
    }
    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProp => {
                console.log(formikProp.values)
                return (
                    <Form>
                        <FastField
                            name='username'
                            component={TextFieldCustom}

                            label="Tên đăng nhập"
                        />
                        <FastField
                            name='password'
                            component={TextFieldCustom}

                            label="Mật khẩu"
                            type="password"
                        />
                        <div className={classes.checkbox}>
                            <Checkbox
                                checked={false}
                            />Nhớ mật khẩu
                        </div>
                        <div>
                            <StyleButton fullWidth>Đăng nhập</StyleButton>
                        </div>
                        <div className={classes.loginWith}>
                            Đăng nhập bằng
                            <div className={classes.icon}>
                                <img src={`${process.env.PUBLIC_URL}/img/fbicon.png`} alt="" className={classes.img} />
                                <img src={`${process.env.PUBLIC_URL}/img/google.png`} alt="" className={classes.img} />
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default Login;