import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, withStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    card: {
        width: "calc(100% / 4 - 2rem)",
        marginLeft: "2rem",
    }
})

const HeaderStyle = withStyles({
    title: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2, /* number of lines to show */
        "-webkit-box-orient": "vertical",
    }
})(CardHeader)

function CardFoodAdmin(props) {
    const classes = useStyle()
    return (
        <Card className={classes.card}>
            <HeaderStyle
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="This is food"
            />
            <CardMedia
                image={process.env.PUBLIC_URL + "/img/complete.png"}
                title="Paella dish"
                style={{
                    height: 0,
                    paddingTop: '56.25%', // 16:9
                }}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests.Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardFoodAdmin;