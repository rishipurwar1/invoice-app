import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "column",
    backgroundColor: "#252945",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 10,
  },
});

const InvoiceItemsTable = ({ invoices }) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow invoices={invoices?.invoices} />
    </View>
  );
};

export default InvoiceItemsTable;
