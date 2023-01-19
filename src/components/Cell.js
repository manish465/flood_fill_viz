const Cell = ({ insertWall, node, floodFill, cellStatus }) => {
    const { isWall, isFill, position } = node;

    const classes = `node ${isWall ? "wall" : ""} ${isFill ? "fill" : ""}`;

    return (
        <div
            className={classes}
            onClick={
                cellStatus.isFillMode
                    ? () => floodFill(position.row, position.col)
                    : () => insertWall(position.row, position.col)
            }
        ></div>
    );
};

export default Cell;
