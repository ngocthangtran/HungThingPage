import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { getFoodForID, upDateListFood, deleteFoodServerSlide } from 'App/menuSlide';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { addNotification } from 'App/notificationSlide';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function TableFood() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { listProduct, loading } = useSelector(state => state.MenuServerReducer)

    //click a row get food
    function handlingClickCell(row) {
        const { id } = row;
        const getFood = getFoodForID(id);
        dispatch(getFood)
    }

    async function deleteFood(row) {
        const res = await dispatch(deleteFoodServerSlide(row.id));
        if (res.payload.status === 200) {
            dispatch(addNotification({ message: `Xóa thành công id: ${row.id}`, type: "success" }))
            const index = listProduct.findIndex(item => item.id === row.id)
            console.log(index)
            dispatch(upDateListFood({ type: "delete", data: { index: index } }))
        } else {
            dispatch(addNotification({ message: `Xóa bị lỗi`, type: "error" }))
        }

    }

    return (
        <TableContainer component={Paper} className={classes.parent}>
            <Table
                className={classes.table}
                aria-label="customized table"
                stickyHeader

            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Tên món ăn</StyledTableCell>
                        <StyledTableCell align="center">Danh mục</StyledTableCell>
                        <StyledTableCell align="right">Hành động</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listProduct &&
                        listProduct.map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}
                                onClick={() => handlingClickCell(row)}
                            >
                                <TableCell align='left'>
                                    {row.nameFood}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.category}
                                </TableCell>
                                <TableCell align='right' className={classes.icon}>
                                    <IconButton
                                        style={{
                                            padding: 5
                                        }}
                                        onClick={() => {
                                            deleteFood(row)
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    {
                                        loading &&
                                        <CircularProgress style={{ width: 20, height: 20 }} />
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    parent: {
        height: '100%',
        "&::-webkit-scrollbar": {
            display: 'none',
        }
    },
    table: {
        width: '100%',

    },
    icon: {
        display: 'flex',
        alignItems: 'center'
    }
});