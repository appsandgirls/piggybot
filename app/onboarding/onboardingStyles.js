import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA500",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 44,
    fontWeight: "900", 
    fontFamily: "Nunito",
    marginBottom: 10,
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Nunito",
    fontWeight: "500",
    marginBottom: 20,
    color: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
  btnPrimary: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 99,
    margin: 2,
    width: "50%",
  },
  btnText: {
    fontSize: 18,
    color: "#FFA500",
    fontFamily: "Nunito",
    textAlign: "center",
    fontWeight: "bold",
  },
})

export default styles
