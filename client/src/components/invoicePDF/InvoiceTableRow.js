import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    flexGrow: 1,
    marginTop: 18,
  },
  description: {
    color: "#dfe3fa",
    fontSize: 12,
  },
});

const InvoiceTableRow = ({ invoices }) => {
  return (
    <View>
      {invoices?.map((invoice) => (
        <View key={invoice.name} style={styles.container}>
          <Text
            style={{ ...styles.description, width: "30%", textAlign: "left" }}
          >
            {invoice.name}
          </Text>
          <Text style={{ ...styles.description, width: "20%" }}>
            {invoice.quantity}
          </Text>
          <Text style={{ ...styles.description, width: "25%" }}>
            {invoice.price}
          </Text>
          <Text
            style={{ ...styles.description, width: "25%", textAlign: "right" }}
          >
            {invoice.total}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default InvoiceTableRow;
