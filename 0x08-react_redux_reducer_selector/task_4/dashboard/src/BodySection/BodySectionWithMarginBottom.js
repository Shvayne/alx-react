import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  BodySectionWithMargin: {
    marginBottom: "40px",
  },
});

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.BodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;