import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CardFoodAdmin from '../CardFoodAdmin/CardFoodAdmin';

const useStyle = makeStyles({
    find: {
        background: '#fff',
        borderRadius: 10,
        marginTop: '1rem',
        padding: '1rem',
        display: 'flex',
    },
    select: {
        width: "30%"
    },
    findName: {
        flex: 1,
        paddingLeft: '2rem'
    },
    listCard: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '1rem',
        marginLeft: '-2rem',
        rowGap: '1rem'
    }
})

const option = [
    { id: 1, title: "Hap" },
    { id: 2, title: "lau" },
    { id: 3, title: "nuong" },
    { id: 4, title: "xao" },
    { id: 5, title: "luoc" },
]

function ListMenu(props) {
    const classes = useStyle();
    const [category, setCategory] = useState('');
    const handleChange = (event) => {
        console.log(event.target.value);
        setCategory('');
    };
    return (
        <>
            <section className={classes.find}>
                <FormControl className={classes.select}>
                    <InputLabel>Danh mục</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Autocomplete
                    className={classes.findName}
                    options={option}
                    getOptionLabel={(option) => option.title}
                    renderInput={
                        params => <TextField {...params} label="Tìm kiếm món ăn" variant="standard" />
                    }
                />

            </section>
            <section className={classes.listCard}>
                <CardFoodAdmin />
                <CardFoodAdmin />
                <CardFoodAdmin />
                <CardFoodAdmin />
                <CardFoodAdmin />
                <CardFoodAdmin />
                <CardFoodAdmin />
            </section>
        </>
    );
}

export default ListMenu;