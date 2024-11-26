import React from "react";

const WithLogging = (WrappedComponent) => {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }

  class NewComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappedComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  NewComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return NewComponent;
};

export default WithLogging;