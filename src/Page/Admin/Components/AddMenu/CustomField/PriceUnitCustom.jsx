import { Chip, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import React from 'react';
import { shortenMoney } from 'utils/convertPrice';
import * as yup from 'yup';

const option = [
    "Kg",
    "Phần",
    "Lạng",
    "Chai",
    "Xị",
]

function PriceUnitCustom(props) {
    const classes = useStyle();
    const { field, form } = props;
    const { value: ListPrice, onChange } = field;

    const { errors } = form;
    const showErr = errors[field.name] ? true : false

    const initialValues = { price: '', unit: null }
    const validate = yup.object().shape({
        price: yup.number("Giá tiên phải là số"),
        unit: yup.string().required("Đơn vị Không được để trống")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            enableReinitialize={true}
        >
            {
                formikProps => {
                    const { values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                    } = formikProps
                    return (
                        <>
                            <section className={classes.input}>
                                <TextField
                                    className={classes.price}
                                    type="number"
                                    name='price'
                                    label="Giá"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                    helperText={
                                        touched.price ? errors.price ? errors.price : '' : ''
                                    }
                                    error={touched.price ? errors.price ? true : false : false}
                                />
                                <Autocomplete
                                    className={classes.select}
                                    onBlur={() => {
                                        handleBlur({
                                            target: {
                                                name: 'unit'
                                            }
                                        })
                                    }}
                                    value={values.unit}
                                    options={option}
                                    getOptionLabel={(option) => option}
                                    onChange={(ev, vl) => {
                                        handleChange({
                                            target: {
                                                name: 'unit',
                                                value: vl
                                            }
                                        })
                                    }}

                                    renderInput={(params) => {
                                        const Blur = () => {
                                            if (values.price && values.unit) {
                                                const newListPrice = [...ListPrice]
                                                newListPrice.push(values)
                                                onChange({
                                                    target: {
                                                        name: 'price',
                                                        value: newListPrice
                                                    }
                                                })
                                            }
                                        }
                                        return (
                                            <TextField
                                                {...params}
                                                onBlur={Blur}
                                                label="Đơn vị"
                                                helperText={
                                                    touched.unit ? errors.unit ? "Không hợp lệ" : '' : ''
                                                }
                                                error={touched.unit ? errors.unit ? true : false : false}
                                            />
                                        )
                                    }}

                                />
                            </section>
                            <section className={classes.chip}>
                                {
                                    ListPrice.map((item, index) => {
                                        const { price, unit } = item;
                                        return (
                                            <Chip
                                                style={{
                                                    background: '#3498db',
                                                    margin: '5px'
                                                }}
                                                key={index}
                                                size="small"
                                                label={`${shortenMoney(price)}/${unit}`}

                                                color="primary"
                                                onDelete={() => {
                                                    const list = [...ListPrice];
                                                    list.splice(index, 1)
                                                    onChange({
                                                        target: {
                                                            name: 'price',
                                                            value: list
                                                        }
                                                    })
                                                }}
                                            />
                                        )
                                    })
                                }

                            </section>
                            {
                                showErr &&
                                <FormHelperText error>Phải có ít nhất một giá</FormHelperText>
                            }
                        </>
                    )
                }
            }
        </Formik>
    );
}

export default PriceUnitCustom;

const useStyle = makeStyles({
    input: {
        width: '100%',
        display: 'flex',
        marginLeft: '-10px',
        "&>div": {
            marginLeft: '10px'

        }
    },
    price: {
        width: "60%"
    },
    select: {
        flex: 1
    },
    chip: {
        width: '100%',
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        height: 70
    }
})