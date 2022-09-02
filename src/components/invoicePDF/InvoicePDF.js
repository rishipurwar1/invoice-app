import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
} from "@react-pdf/renderer";
import React from "react";
import InvoiceItemsTable from "./InvoiceItemsTable";
import {
  capitalizeFirstLetter,
  getSubstring,
  formatDate,
} from "../utils/utils";
import InvoiceFooter from "./InvoiceFooter";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      fontWeight: "400",
    },
    {
      src: "http://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: "600",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#141625",
    padding: 80,
    fontFamily: "Inter",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#1F2139",
    paddingHorizontal: 20,
  },
  status: {
    color: "#dfe3fa",
    fontSize: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    marginRight: 4,
  },
  section: {
    backgroundColor: "#1F2139",
    width: "100%",
    borderRadius: 4,
    padding: 20,
    marginTop: 15,
    flexGrow: 1,
  },
  invoiceDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#dfe3fa",
    fontSize: 12,
    textAlign: "right",
  },
});

const InvoicePDF = ({ data }) => {
  let badgeBgColor = "#292C45";
  let badgeTextColor = "#DFE3FA";

  switch (data.status) {
    case "paid":
      badgeBgColor = "rgba(51, 214, 159, 0.06)";
      badgeTextColor = "#33d6a0";
      break;
    case "pending":
      badgeBgColor = "rgba(255, 143, 0, 0.06)";
      badgeTextColor = "#ff9100";
      break;
    default:
      break;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View>
            <View style={styles.header}>
              <Text style={styles.status}>Status</Text>
              <View
                style={{
                  ...styles.badge,
                  backgroundColor: badgeBgColor,
                  color: badgeTextColor,
                }}
              >
                <View
                  style={{ ...styles.dot, backgroundColor: badgeTextColor }}
                ></View>
                <Text>{capitalizeFirstLetter(data?.status)}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.invoiceDetail}>
                <View>
                  <Text style={styles.text}>{`#${getSubstring(
                    data?._id,
                    6
                  )}`}</Text>
                  <Text style={styles.description}>{data?.description}</Text>
                </View>
                <View style={styles.description}>
                  <Text>{data?.streetAddress}</Text>
                  <Text>{data?.city}</Text>
                  <Text>{data?.postCode}</Text>
                  <Text>{data?.country}</Text>
                </View>
              </View>
              <View style={{ ...styles.invoiceDetail, marginVertical: 30 }}>
                <View>
                  <View>
                    <Text style={styles.description}>Invoice Date</Text>
                    <Text style={{ ...styles.text, fontSize: 14 }}>
                      {formatDate(data?.invoiceDate)}
                    </Text>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.description}>Payment Due</Text>
                    <Text style={{ ...styles.text, fontSize: 14 }}>
                      {formatDate(data?.invoiceDate)}
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.description}>Bill To</Text>
                    <Text style={{ ...styles.text, fontSize: 14 }}>
                      {data?.clientName}
                    </Text>
                  </View>
                  <View style={{ marginTop: 6 }}>
                    <Text style={styles.description}>
                      {data?.clientStreetAddress}
                    </Text>
                    <Text style={styles.description}>{data?.clientCity}</Text>
                    <Text style={styles.description}>
                      {data?.clientPostCode}
                    </Text>
                    <Text style={styles.description}>
                      {data?.clientCountry}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.description}>Sent To</Text>
                  <Text style={{ ...styles.text, fontSize: 14 }}>
                    {data?.clientEmail}
                  </Text>
                </View>
              </View>
              <InvoiceItemsTable invoices={data} />
              <InvoiceFooter status={data.status} total={data?.total} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
