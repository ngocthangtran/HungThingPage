import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyle = makeStyles({
    parent: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '-1.5rem',
        flexWrap: 'wrap',
        rowGap: "1rem"
    },

    card: {
        width: 'calc(100% / 5 - 1.5rem)',
        marginLeft: '1.5rem',
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: '0.3rem',
        backgroundColor:'#ffffff'
    },
    img: {
        width: '100%',
        padding: '1rem'
    },
    conten: {
        width: '100%',
        paddingInline: '1rem',
        borderTop: "1px solid black"
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: '5px',
    },
    title: {
        fontWeight: "bold"
    },
    data: {

    }
})
function Desk(props) {
    const classes = useStyle();
    return (
        <div className={classes.parent}>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Bàn 1
                        </div>
                        <div className={classes.data}>
                            (Trống)
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <img src={process.env.PUBLIC_URL + '/img/dinner-table.png'} alt="" className={classes.img} />
                <div className={classes.conten}>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số người
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Số món
                        </div>
                        <div className={classes.data}>
                            5
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            Tạm tính
                        </div>
                        <div className={classes.data}>
                            1.500.000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desk;