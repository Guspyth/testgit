// latihan/tugas 1
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/module-latihan/latihan1" />;
// }

// latihan/tugas 2
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/module-latihan/latihan2" />;
// }

// latihan/tugas 3
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/module-latihan/latihan3" />;
// }

// latihan/tugas 4
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/module-latihan/latihan4" />;
// }

// latihan/tugas 5
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/module-latihan/latihan5" />;
// }

// ======================================================
// latihan 6 — PRAKTIKUM (Tab Navigation)
// uncomment ini untuk run praktikum latihan 6
// import { Link } from "expo-router";
// import { Button, Text, View } from "react-native";
// export default function Index() {
//   return (
//     <View>
//       <Text>Landing Page</Text>
//       <Link href={"/main-apps"} push asChild>
//         <Button title="Get Started" />
//       </Link>
//     </View>
//   );
// }
// ======================================================

// ======================================================
// latihan 6 — TUGAS (Drawer Navigation) — AKTIF
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Landing Page</Text>
      <Link href={"/main-apps-tugas"} push asChild>
        <Button title="Get Started" />
      </Link>
    </View>
  );
}
// ======================================================
