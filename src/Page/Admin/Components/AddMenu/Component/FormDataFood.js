import { Button, makeStyles } from '@material-ui/core';
import MenuApi from 'Api/MenuApi';
import SelectFieldCustom from 'CustomField/SelectFieldCustom';
import TextareaAutosizeCustom from 'CustomField/TextareaAutosizeCustom';
import TextFieldCustom from 'CustomField/TextFieldCustom';
import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageUpdateCustom from '../CustomField/ImageUpdateCustom';
import PriceUnitCustom from '../CustomField/PriceUnitCustom';
import * as yup from 'yup';
import DialogInput from './DialogInput';
import { addNotification } from 'App/notificationSlide';
import { upDateListFood } from 'App/menuSlide';


function FormDataFood(props) {
    const classes = useStyle();
    const dispatch = useDispatch();
    const { selectFood } = useSelector(state => state.MenuServerReducer)
    // console.log({ selectFood, error })
    const initialValues =
        Object.keys(selectFood).length !== 0 ? {
            name: selectFood.name, category: selectFood.category,
            price: selectFood.price,
            describe: selectFood.describe,
            image: selectFood.linkImg
        } :
            {
                name: '', category: "",
                price: [
                    { "price": 150000, "unit": "Phần" },
                    { "price": 200000, "unit": "Phần" },
                ],
                describe: '',
                image: [

                ]
            };
    const validate = yup.object().shape({
        name: yup.string().required('Mục bắt buộc'),
        price: yup.array().min(1, "Ít nhất phải có một giá"),
        image: yup.array().min(1, "Ít nhất phải có một ảnh"),
        describe: yup.string(),
        category: yup.string().required('Mục bắt buộc'),
    })

    const { listCategory } = useSelector(state => state.MenuServerReducer)
    //get category
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const convert = []
        if (listCategory) {
            listCategory.forEach(element => {
                convert.push({ vl: element.name, label: element.name })
            });
            setCategory(convert)
        }
    }, [listCategory])

    //handling submid new food
    const Submit = async (values) => {
        //complete
        //upload data food
        const dataFood = {
            name: values.name,
            describeFood: values.describe,
            price: values.price,
            category: values.category
        }
        const dataResponseFood = await MenuApi.addFoodSerer(dataFood);
        if (!dataResponseFood.status) {
            const { idFood } = dataResponseFood;
            //upload image
            const formData = new FormData();
            values.image.forEach(img => {
                formData.append('avatar', img);
            })
            const dataResponseImg = await MenuApi.addImage(formData, idFood)
            console.log(dataResponseImg)
            if (dataResponseImg.status) {
                dispatch(addNotification({ message: "Không thêm được ảnh bạn có thể cập nhật trong sửa chữa", type: "warning" }))
            } else {
                const data = {
                    id: idFood,
                    nameFood: values.name,
                    category: values.category
                }
                dispatch(upDateListFood({ type: 'add', data: data }))
                dispatch(addNotification({ message: "Thêm dữ liệu thành công", type: "success" }))
            }
        } else {
            if (dataResponseFood.status === 406) {
                dispatch(addNotification({ message: "Đã tồn tại món ăn này", type: "success" }))
            }
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={Submit}
            validationSchema={validate}
            enableReinitialize
        >
            {
                formikProps => {
                    const { category: categoryValue,
                    } = formikProps.values;

                    const {
                        handleChange
                    } = formikProps

                    const setNewCategory = (value) => {
                        handleChange({
                            target: {
                                name: 'category',
                                value: value
                            }
                        })
                        const newList = [...category]
                        newList.push({ vl: value, label: value })
                        setCategory(newList)
                    }
                    const setOpen = () => {

                    }
                    return (
                        <Form>
                            <DialogInput open={categoryValue === "add"} getVale={setNewCategory} setOpen={setOpen} />
                            <section className={classes.info}>
                                <div className={classes.name}>
                                    <FastField

                                        name="name"
                                        component={TextFieldCustom}
                                        label="Tên sản phẩm"
                                    />
                                </div>
                                <div className={classes.category}>
                                    {
                                        category.length !== 0 &&
                                        <FastField
                                            name="category"
                                            component={SelectFieldCustom}

                                            label="Danh mục"
                                            items={category}
                                        />
                                    }
                                    {
                                        category.length === 0 &&
                                        <FastField
                                            name="category"
                                            component={SelectFieldCustom}

                                            label="Danh mục"
                                            items={[]}
                                        />
                                    }
                                </div>
                            </section>
                            <section className={classes.info}>
                                <div className={classes.name}>
                                    <FastField
                                        name="price"
                                        component={PriceUnitCustom}
                                    />
                                </div>

                                <div className={classes.category}>
                                    <FastField
                                        name="describe"
                                        component={TextareaAutosizeCustom}

                                        label="Miêu tả món ăn"
                                    />
                                </div>
                            </section>
                            <section className={classes.info}>
                                <FastField
                                    name='image'
                                    component={ImageUpdateCustom}
                                />
                            </section>
                            <Button
                                type={'submit'}
                                className={classes.button}
                                fullWidth
                            >Thêm</Button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default FormDataFood;

const useStyle = makeStyles({
    info: {
        marginTop: '15px',
        display: 'flex',
        marginLeft: '-10px',
        "&>div": {
            marginLeft: '10px'

        }
    },
    name: {
        width: '60%',

    },
    category: {
        flex: 1
    },

    describe: {
        display: 'flex',
    },
    price: {
        width: "60%"
    },
    button: {
        marginTop: '1rem',
        backgroundColor: "#3498db"
    },
})