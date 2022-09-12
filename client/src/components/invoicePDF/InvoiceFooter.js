import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    padding: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  description: {
    color: "#dfe3fa",
    fontSize: 12,
  },
});

const InvoiceFooter = ({ total, status }) => (
  <View style={styles.container}>
    <Text style={styles.description}>{`Amount ${
      status === "paid" ? "Paid" : "Due"
    }`}</Text>
    <Text style={{ ...styles.description, fontWeight: "bold" }}>
      {`$${total}`}
    </Text>
  </View>
);

export default InvoiceFooter;
