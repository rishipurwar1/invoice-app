import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    textAlign: "center",
    flexGrow: 1,
  },
  description: {
    color: "#dfe3fa",
    fontSize: 12,
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={{ ...styles.description, width: "30%", textAlign: "left" }}>
      Item Name
    </Text>
    <Text style={{ ...styles.description, width: "20%" }}>Qty.</Text>
    <Text style={{ ...styles.description, width: "25%" }}>Price</Text>
    <Text style={{ ...styles.description, width: "25%", textAlign: "right" }}>
      Total
    </Text>
  </View>
);

export default InvoiceTableHeader;
