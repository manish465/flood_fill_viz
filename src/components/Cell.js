const Cell = ({ grid, insertWall, node, floodFill, cellStatus }) => {
    const classes = `node ${node.isWall ? "wall" : ""} ${
        node.isFill ? "fill" : ""
    }`;

    return (
        <div
            className={classes}
            onClick={
                cellStatus.isFillMode
                    ? () =>
                          floodFill(grid, node.position.row, node.position.col)
                    : () => insertWall(node.position.row, node.position.col)
            }
        ></div>
    );
};

export default Cell;
