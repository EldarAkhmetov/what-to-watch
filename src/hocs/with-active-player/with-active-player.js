import React, {PureComponent} from "react";

const withActivePlayer = (WrappedComponent) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null
      };

      this._changeActiveItemId = this._changeActiveItemId.bind(this);
    }

    _changeActiveItemId(itemId) {
      this.setState({
        activeItemId: itemId
      });
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          activeItemId={activeItemId}
          changeActiveItemId={this._changeActiveItemId}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
