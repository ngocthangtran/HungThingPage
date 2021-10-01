import { Button, Chip, FormHelperText } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles, withStyles } from '@material-ui/styles';



function ImageUpdateCustom(props) {
    const classes = useStyle();
    const [urlImg, setUrlImg] = useState('');

    const { field, form } = props;
    const { value, onChange } = field;
    const { errors } = form;
    const showErr = errors[field.name] ? true : false

    const changeFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.split('/')[0] === 'image') {
                const newFiles = [...value];
                newFiles.push(file);
                onChange({
                    target: {
                        name: 'image',
                        value: newFiles
                    }
                })
            }
            else {
                alert('Chỉ được chọn file ảnh')
            }
        }
    }

    useEffect(() => {
        if (value.length !== 0) {
            if (typeof (value.at(-1)) === 'string') {
                setUrlImg(value.at(-1))
                return
            }
            setUrlImg(URL.createObjectURL(value.at(-1)))
        }
    }, [value])


    return (
        <div className={classes.upload}>
            <div className={classes.uploadImg}>
                <input
                    accept="image/jpeg,image/png"
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{ display: 'none' }}
                    onChange={changeFile}
                    name="avatar"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" endIcon={<CloudUploadIcon />} fullWidth>
                        Tải lên ảnh minh họa
                    </Button>
                </label>

                <div className={classes.listimage}>
                    {
                        value.length === 0 && <span>Chưa có ảnh nào</span>
                    }
                    {
                        value.length !== 0 && value.map((item, index) => {
                            var name = item.name
                            if (typeof (item) === 'string') {
                                name = item.split('/').at(-1);

                            }
                            return (
                                <ChipStyle
                                    onClick={() => {
                                        if (typeof (item) === 'string') {
                                            setUrlImg(item)
                                            return
                                        }
                                        setUrlImg(URL.createObjectURL(item))
                                    }}
                                    label={name}
                                    onDelete={() => {
                                        const newFiles = [...value];
                                        newFiles.splice(index, 1)
                                        onChange({
                                            target: {
                                                name: 'image',
                                                value: newFiles
                                            }
                                        })
                                    }}
                                    key={index}
                                />
                            )
                        })
                    }
                    {
                        showErr &&
                        <FormHelperText error>{errors[field.name]}</FormHelperText>
                    }
                </div>
            </div>
            <div className={classes.image} style={{
                backgroundImage: `url(${urlImg ? urlImg : process.env.PUBLIC_URL + '/img/test.jpg'})`
            }}>
            </div>

        </div>
    );
}

export default ImageUpdateCustom;

const useStyle = makeStyles({
    upload: {
        display: "flex",
        width: "100%"
    },
    uploadImg: {
        width: "40%"
    },
    listimage: {
        marginTop: '1rem',
        width: "100%",
        height: '200px',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        overflowY: 'hidden',
        "&>span": {
            color: "#999",
            margin: 'auto'
        }
    },
    image: {
        marginLeft: 10,
        flex: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
})

const ChipStyle = withStyles({
    root: {
        borderRadius: 'unset',
        width: "100%",
        justifyContent: 'space-between',
        marginTop: "5px"
    }
})(Chip)