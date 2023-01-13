import { useState } from "react";

const Node = ({
    row,
    col,
    isWall,
    isFilled,
    wallMode,
    isFillDisabled,
    setIsFillDisabled,
}) => {
    const [insertWall, setInsertWall] = useState(isWall);
    const [insertFill, setInsertFill] = useState(isFilled);

    const setInsertFillBoard = () => {
        if (!isFillDisabled) {
            setInsertFill(true);
            setIsFillDisabled(true);
        }
    };

    const colClasses = `col ${insertWall ? "wall" : ""} ${
        insertFill ? "blue" : ""
    }`;
    return (
        <div
            className={colClasses}
            onClick={() =>
                wallMode ? setInsertWall(true) : setInsertFillBoard()
            }
        ></div>
    );
};

export default Node;
