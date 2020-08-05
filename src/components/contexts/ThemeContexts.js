import React, { Component, createContext } from "react";

export const ThemedContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    dark: { bg: "black", text: "white" },
    isLightTheme: true,
    light: { bg: "white", text: "black" },
  };
  render() {
    return (
      <ThemedContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemedContext.Provider>
    );
  }
}
