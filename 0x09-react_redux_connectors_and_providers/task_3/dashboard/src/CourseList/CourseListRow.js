import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr
      className={css(
        isHeader
          ? styles.headerRowStyle
          : isChecked
          ? styles.rowStyle
          : styles.rowChecked
      )}>
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onChange={handleCheck}
            />{" "}
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },

  headerRowStyle: {
    backgroundColor: "#deb5b545",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;