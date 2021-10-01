import { Button, Checkbox, makeStyles, } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import loginApi from 'Api/loginApi';
import { addUserAction } from 'App/UserSlide';
import TextFieldCustom from 'CustomField/TextFieldCustom';
import { Formik, Form, FastField } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addNotification } from 'App/notificationSlide';

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
    },
    textField: {
        marginBlock: '2rem',
    },
    err: {
        color: "red"
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

const Loading = withStyles({
    root: {
        height: 20,
        width: 20
    }
})(CircularProgress)

function Login(props) {
    const classes = useStyel();
    const [err, setErr] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmidLogin = async (values) => {
        const data = await loginApi.login(values);

        if (data.status) {
            setErr(data)
            return
        }
        setErr("")
        localStorage.setItem('token', data.token);
        const actionAddUser = addUserAction(data.user);
        await dispatch(actionAddUser);
        const notification = addNotification({ message: "Đăng nhập thành công", type: "success" })
        dispatch(notification);
        history.push('/')
    }
    const initialValues = {
        'username': '',
        'password': '',
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmidLogin}
        >
            {formikProp => {
                const { isSubmitting } = formikProp;
                return (
                    <Form>
                        <div className={classes.textField}>
                            <FastField
                                name='username'
                                component={TextFieldCustom}

                                label="Tên đăng nhập"
                            />
                        </div>
                        <div className={classes.textField} style={{ marginBottom: "1rem" }}>
                            <FastField
                                name='password'
                                component={TextFieldCustom}

                                label="Mật khẩu"
                                type="password"
                            />
                        </div>
                        {
                            isSubmitting &&
                            <div style={{ height: 20 }}>
                                <Loading

                                    style={
                                        {
                                            width: 20,
                                            height: 20,
                                            float: 'right'
                                        }
                                    }
                                />
                            </div>
                        }
                        {
                            err && <div className={classes.err}>{err.message}</div>
                        }
                        <div className={classes.checkbox}>
                            <Checkbox
                                checked={false}
                            />Nhớ mật khẩu
                        </div>
                        <div>
                            <StyleButton
                                fullWidth
                                type="submit"
                            >
                                Đăng nhập</StyleButton>
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