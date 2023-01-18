const Cell = ({ handleClick, node }) => {
    const { isWall, isFill, position } = node;

    const classes = `node ${isWall ? "wall" : ""} ${isFill ? "fill" : ""}`;

    return (
        <div
            className={classes}
            onClick={() => handleClick(position.row, position.col)}
        ></div>
    );
};

export default Cell;