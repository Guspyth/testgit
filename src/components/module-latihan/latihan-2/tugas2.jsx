
// ============================================================
// IMPORT
// ============================================================

// [IMPORT REACT]
// Digunakan untuk membuat component React Native
import React from "react";

// [IMPORT COMPONENT REACT NATIVE]
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";



// COMPONENT UTAMA


export default function App() {

  
  // OBJECT DATA DIRI
  

  // [OBJECT]
  // Menyimpan informasi data diri
  const dataDiri = {
    nama: "Agus Nurfajri",
    beratBadan: 55, // kg
    tinggiBadan: 170, // cm
  };


  
  // ARRAY OF OBJECT MAKANAN
  

  // [ARRAY OF OBJECT]
  // Menyimpan daftar makanan harian
  const makananHarian = [
    {
      waktu: "Sarapan",
      kalori: 500,
    },
    {
      waktu: "Makan Siang",
      kalori: 700,
    },
    {
      waktu: "Makan Malam",
      kalori: 600,
    },
    {
      waktu: "Snack",
      kalori: 300,
    },
  ];


  
  // MENGHITUNG TOTAL KALORI

  // [VARIABLE]
  // Menyimpan total kalori
  let totalKalori = 0;

  // [LOOPING]
  // Menjumlahkan seluruh kalori makanan
  for (let i = 0; i < makananHarian.length; i++) {
    totalKalori += makananHarian[i].kalori;
  }


  
  // KONVERSI TINGGI BADAN
  

  // [CONVERT CM TO METER]
  const tinggiMeter = dataDiri.tinggiBadan / 100;


  
  // MENGHITUNG BMI
  

  // [RUMUS BMI]
  // BMI = berat badan / (tinggi * tinggi)
  const bmi =
    dataDiri.beratBadan /
    (tinggiMeter * tinggiMeter);


  
  // MENENTUKAN STATUS BMI

  let statusBMI = "";

  // [CONDITIONAL]
  if (bmi < 18.5) {
    statusBMI = "Kurus";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBMI = "Ideal";
  }
  else {
    statusBMI = "Berlebih";
  }


  
  // MENENTUKAN STATUS ASUPAN KALORI
  

  let statusKalori = "";

  // [CONDITIONAL]
  if (totalKalori < 2000) {
    statusKalori = "Kurang";
  }
  else if (totalKalori >= 2000 && totalKalori <= 2500) {
    statusKalori = "Cukup";
  }
  else {
    statusKalori = "Berlebih";
  }


  
  // KESIMPULAN AKHIR EVALUASI
  

  let kesimpulan = "";

  // [CONDITIONAL]
  if (statusBMI === "Ideal" && statusKalori === "Cukup") {
    kesimpulan =
      "Berat badan dan asupan kalori sudah baik.";
  }
  else if (statusBMI === "Kurus") {
    kesimpulan =
      "Berat badan masih kurang, perlu meningkatkan asupan gizi.";
  }
  else if (statusBMI === "Berlebih") {
    kesimpulan =
      "Berat badan berlebih, perlu menjaga pola makan.";
  }
  else {
    kesimpulan =
      "Perlu memperhatikan keseimbangan kalori harian.";
  }


  
  // TAMPILAN
  

  return (

    // [SCROLLVIEW]
    // Agar tampilan bisa di-scroll
    <ScrollView contentContainerStyle={styles.container}>

      {/* 
          JUDUL
       */}

      <Text style={styles.title}>
        Evaluasi Berat Badan dan Kalori
      </Text>


      {/* 
          DATA DIRI
       */}

      <Text style={styles.heading}>
        Informasi Data Diri
      </Text>

      <Text style={styles.text}>
        Nama : {dataDiri.nama}
      </Text>

      <Text style={styles.text}>
        Berat Badan : {dataDiri.beratBadan} kg
      </Text>

      <Text style={styles.text}>
        Tinggi Badan : {dataDiri.tinggiBadan} cm
      </Text>


      {/* 
          DAFTAR MAKANAN
       */}

      <Text style={styles.heading}>
        Daftar Makanan Harian
      </Text>

      {/* [MAP]
          Menampilkan seluruh makanan
      */}
      {makananHarian.map((item, index) => (
        <Text key={index} style={styles.text}>
          {item.waktu} : {item.kalori} kalori
        </Text>
      ))}


      {/* 
          HASIL PERHITUNGAN
       */}

      <Text style={styles.heading}>
        Hasil Evaluasi
      </Text>

      <Text style={styles.text}>
        Total Kalori : {totalKalori} kalori
      </Text>

      <Text style={styles.text}>
        BMI : {bmi.toFixed(2)}
      </Text>

      <Text style={styles.text}>
        Status BMI : {statusBMI}
      </Text>

      <Text style={styles.text}>
        Status Kalori : {statusKalori}
      </Text>

      <Text style={styles.result}>
        Kesimpulan : {kesimpulan}
      </Text>

    </ScrollView>
  );
}



// STYLE


const styles = StyleSheet.create({

  
  // CONTAINER
  
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },


  
  // TITLE
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },


  
  // HEADING
  
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },


  
  // TEXT
  
  text: {
    fontSize: 18,
    marginBottom: 5,
  },


  
  // RESULT

  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    color: "blue",
  },
});