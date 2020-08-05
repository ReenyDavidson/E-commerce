import React, { Component } from "react";
import { ThemedContext } from "./contexts/ThemeContexts";

export default class Cart extends Component {
  render() {
    return (
      <ThemedContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div style={{ background: theme.bg, color: theme.text }}>
              I am cart page
            </div>
          );
        }}
      </ThemedContext.Consumer>
    );
  }
}
