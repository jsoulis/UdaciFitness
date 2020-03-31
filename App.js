import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import AddEntry from "./components/AddEntry";

export default function App() {
  return (
    <View>
      <AddEntry />
    </View>
  );
}
